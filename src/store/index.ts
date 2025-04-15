import vuetify from "@/plugins/vuetify";
import { createStore } from "vuex";
import i18n from "../i18n";

export default createStore({
  state: {
    showContactDialog: false,
    isMobile: false,
  },
  mutations: {
    ToggleShowContactDialog(state) {
      state.showContactDialog = !state.showContactDialog;
    },
    setIsMobile(state, payload: boolean) {
      state.isMobile = payload;
    },
  },
  getters: {
    isDE(): boolean {
      return i18n.global.locale.value === "de";
    },
    isDarkTheme(): boolean {
      return vuetify.theme.global.current.value.dark;
    },
    ActiveTheme(): string | undefined {
      return vuetify.theme.global.current.value.dark ? "dark" : "light";
    },
    GetShowContactDialog: (state) => state.showContactDialog,
    // 💡 Responsive info (nicht reaktiv – Vuetify direkt)
    ResponsiveFontSize(): string {
      return vuetify.display.smAndDown ? "display-1" : "display-2";
    },
    isMobile: (state) => state.isMobile,
  },
});
