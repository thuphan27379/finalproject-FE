import React from "react";
import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material"; //xoa css mac dinh cua MUI

import customizeComponents from "./customizations";

// modul 2.3 .3.7
// const themeCustom = createTheme({
//   palette: {
//     primary: {
//       main: "#B31942 ", //700
//       light: "#e65e7a", //300
//       dark: "#7c093a",
//       contrastText: "#fbe3e7",
//     },
//     secondary: {
//       main: "#0A3161", //800
//       light: "#476390", //400
//       dark: "#04214a",
//       contrastText: "#e5e8ef",
//     },
//   },
// });

// custom theme, design
const PRIMARY = {
  light: "#e65e7a",
  main: "#B31942 ",
  dark: "#7c093a",
  contrastText: "#FFF",
};
const SECONDARY = {
  light: "#476390",
  main: "#0A3161",
  dark: "#04214a",
  contrastText: "#FFF",
};
// const SUCCESS = {
//   lighter: "#E9FCD4",
//   light: "#AAF27F",
//   main: "#54D62C",
//   dark: "#229A16",
//   darker: "#08660D",
//   contrastText: "#FFF",
// };
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

//
function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      // success: SUCCESS,
      text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
      background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
      action: {
        active: GREY[600],
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
        error: {
          main: "#B31942 ", //700
        },
        warning: {
          main: "#B31942 ", //700
        },
        info: {
          main: "#0A3161", //800
        },
        success: {
          main: "#0A3161", //800
        },
      },
    },

    shape: { borderRadius: 8 },

    // custom style for all components here
    components: {},

    // responsive //
    breakpoints: {
      values: {
        xs: 0, //extra-small: 0px
        sm: 600, //small: 600px
        md: 900, //medium: 900px
        lg: 1200, //large: 1200px
        xl: 1536, //extra-large: 1536px
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ].join(","),
      fontSize: 15,
      fontWeight: 800,
      spacing: 4,
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "2.4rem",
      // },
    },

    // transition, ease //
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
      easing: {
        // This is the most common easing curve.
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        // Objects enter the screen at full velocity from off-screen and
        // slowly decelerate to a resting point.
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        // Objects leave the screen at full velocity. They do not decelerate when off-screen.
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        // The sharp curve is used by objects that may return to the screen at any time.
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  };

  // index custom components
  const theme = createTheme(themeOptions);
  theme.components = customizeComponents(theme);

  //
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
