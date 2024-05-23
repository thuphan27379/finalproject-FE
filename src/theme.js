import { createTheme } from "@mui/material/styles";

// theme customization
// default theme of the webapp for reuseable primary (button, menu, header, navbar, ...)
// bo vo themeProvider routes/index.js
export const theme = createTheme({
  // background (every part of layouts), textColor (title, header, content, menu, placeholder.. ), logo-icon, button, border, boxShadow, hover..
  root: { backgroundColor: "white", color: "black" }, //??????????

  // components //
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiFilledInput: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFab: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: "dense",
      },
    },
  },

  // zIndex
  // mobile stepper: 1000
  // fab: 1050
  // speed dial: 1050
  // app bar: 1100
  // drawer: 1200
  // modal: 1300
  // snackbar: 1400
  // tooltip: 1500

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

  // color palette //
  palette: {
    primary: {
      main: "#B31942 ", //700
      light: "#e65e7a", //300
      dark: "#7c093a",
      contrastText: "#fbe3e7",
    },
    secondary: {
      main: "#0A3161", //800
      light: "#476390", //400
      dark: "#04214a",
      contrastText: "#e5e8ef",
    },
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
    mode: "dark",
  },

  // font, text //typography, spacing
  // h1
  // h2
  // h3
  // h4
  // h5
  // h6
  // subtitle1
  // subtitle2
  // body1
  // body2
  // button
  // caption
  // overline
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
    fontSize: 12,
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
});

// dark: backgroundColor: "black", textColor: "white"
// light: backgroundColor: "white", textColor: "black"
// light grey, dark grey..
// con lai giu nguyen

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     primary: {
//       ...amber,
//       ...(mode === 'dark' && {
//         main: amber[300],
//       }),
//     },
//     ...(mode === 'dark' && {
//       background: {
//         default: deepOrange[900],
//         paper: deepOrange[900],
//       },
//     }),
//     text: {
//       ...(mode === 'light'
//         ? {
//             primary: grey[900],
//             secondary: grey[800],
//           }
//         : {
//             primary: '#fff',
//             secondary: grey[500],
//           }),
//     },
//   },
// });
