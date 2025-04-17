// Styles
import "@mdi/font/css/materialdesignicons.css";

// Composables
import { createVuetify, ThemeDefinition } from "vuetify";
import 'vuetify/styles';

// Define light and dark themes
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // Blue
    primary: "#3949ab",
    primaryLight: "#6f74dd",
    primaryDark: "#00227b",
    // Orange
    secondary: "#f4511e",
    secondaryLight: "#ff844c",
    secondaryDark: "#b91400",
    // Complementary Sand (unused)
    complementary: "#b99821",
    // Purple
    triadicFirst: "#9c39ab",
    // Bordeaux Red
    triadicSecond: "#ab3948",
    // Text and Background
    text: "#3e3e3e",
    background: "#ffffff",
    btnColor: "#ffffff",
    // Home Hero Area
    heroGradientBackgroundLeft: "#3949ab",
    heroGradientBackgroundRight: "#f4511e",
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
    primary: "#9fa8da",
    primaryLight: "#d1d9ff",
    primaryDark: "#6f79a8",
    // Orange
    secondary: "#ffab91",
    secondaryLight: "#ffddc1",
    secondaryDark: "#c97b63",
    // Light Purple
    triadicFirst: "#d19fda",
    // Light Bordeaux Red
    triadicSecond: "#da9fa8",
    // Button and Background
    btnColor: "#121212",
    heroGradientBackgroundLeft: "#383838",
    heroGradientBackgroundRight: "#121212",
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
