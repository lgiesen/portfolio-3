import vuetify from "@/plugins/vuetify";
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
      return i18n.global.locale.value === "de";
    },
    GetShowContactDialog: (state) => state.showContactDialog,
    // 💡 Responsive info (nicht reaktiv – Vuetify direkt)
    ResponsiveFontSize(): string {
      return vuetify.display.smAndDown ? "display-1" : "display-2";
    },
  },
});
