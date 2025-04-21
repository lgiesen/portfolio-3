// src/i18n.ts
import { createI18n } from "vue-i18n";

function loadLocaleMessages(): Record<string, any> {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: Record<string, unknown> = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}
export default createI18n({
  legacy: false, 
  locale: localStorage.getItem('locale') || 'de', // en as fallback
  fallbackLocale: "de",
  globalInjection: true,
  warnHtmlMessage: false,
  messages: loadLocaleMessages(),
});
