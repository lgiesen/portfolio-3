import vuetify from "@/plugins/vuetify"; // Vuetify instance
import { createStore } from "vuex";
import i18n from "../i18n";

export default createStore({
  state: {
    showContactDialog: false,
  },
  mutations: {
    ToggleShowContactDialog(state) {
      state.showContactDialog = !state.showContactDialog;
    },
  },
  getters: {
    isDE(): boolean {
      return i18n.global.locale.value === "de"; // Vue 3 uses `i18n.global.locale.value`
    },
    isDarkTheme(): boolean {
      return vuetify.theme.global.current.value.dark;
    },
    ActiveTheme(): string | undefined {
      return vuetify.theme.global.current.value.dark ? "dark" : "light";
    },
    GetShowContactDialog: (state) => state.showContactDialog,
    // isMobile(): boolean {
    //   return vuetify.display.mobile;
    // },
    ResponsiveFontSize(): string {
      return vuetify.display.smAndDown ? "display-1" : "display-2";
    },
  },
});
