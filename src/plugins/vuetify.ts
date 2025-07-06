import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, ThemeDefinition } from "vuetify";
import 'vuetify/styles';


// Define light and dark themes
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // Blue
    primary: "#013D63",
    primaryLight: "#7BC0EE",
    // primaryDark: "#052545",
    link: "#052545",
    // Orange
    secondary: "#7BC0EE",
    secondaryLight: "#ff844c",
    secondaryDark: "#043E38",
    // accent: "#016358",
    text: "#3e3e3e",
    background: "#ffffff",
    btnColor: "#ffffff",
    // Home Hero Area
    heroGradientBackgroundLeft: "#7BC0EE",
    heroGradientBackgroundRight: "#013D63",
    // Alerts
    success: "#34c759",
    warning: "#ff954f",
    error: "#ff3a30",
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // Blue
    primary: "#7BC0EE",
    // primaryLight: "#d1d9ff",
    // primaryDark: "#6f79a8",
    // Orange
    secondary: "#dff0fa",
    // secondaryLight: "#ffddc1",
    // secondaryDark: "#c97b63",
    // Button and Background
    btnColor: "#121212",
    // TODO: MAKE IT DARKER
    heroGradientBackgroundLeft: "#7BC0EE",
    heroGradientBackgroundRight: "#052545",
    // Google Material Design Dark Theme Guidelines
    background: "#121212",
    backgroundLight: "#383838",
    backgroundSuperLight: "#7f7f7f",
  },
};

// Create Vuetify instance
export default createVuetify({
  theme: {
    defaultTheme: "light", // Default to light mode, can be changed dynamically
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  icons: {
    defaultSet: "mdi", // Ensure the Material Design Icons set is used
  },
});
