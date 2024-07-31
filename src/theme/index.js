import React, { createContext, useMemo, useState } from "react";
import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material"; // xoa css mac dinh cua MUI
import customizeComponents from "./customizations";

// module 2.3 .3.7 // custom theme, design
// color
const PRIMARY = {
  1000: "#6b0f27",
  900: "#7d112e",
  800: "#8f1434",
  700: "#a1163b",
  main: "#b31942",
  600: "#ba2f54",
  500: "#c24667",
  400: "#c95e7a",
  300: "#d1758d",
  200: "#d98ca0",
  100: "#e0a3b3",
  0: "#e8bac6",
  // contrastText: "#FFF",
};
const SECONDARY = {
  1000: "#061d3a",
  900: "#072243",
  800: "#08274d",
  700: "#092c57",
  main: "#0A3161",
  600: "#224570",
  500: "#3a5a80",
  400: "#536e90",
  300: "#6c83a0",
  200: "#8498b0",
  100: "#9dacbf",
  0: "#b5c1cf",
  // contrastText: "#FFF",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  // contrastText: "#FFF",
};
const GREY = {
  // white to black
  0: "#FFF", // white
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
  1000: "#000", // black
};

// func custom MUI style
// xai chung cho toan bo site, component & responsive...
const MuiCustomProvider = createTheme({
  shape: { borderRadius: 8 },

  // custom style for all components here
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          //  [`&.${alertClasses.outlinedInfo}`]: {
          //  [`&.${alertClasses.outlined}.${alertClasses.colorInfo}`]: {
          //  color: '#0A3161',
          // },
        },
      },
    },
  },

  // responsive //
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },

  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","), // index.html: Roboto
    fontSize: 15,
    fontWeight: 800,
    spacing: 4,
    // responsive
    "@media (min-width:768px)": {
      fontSize: "1.5rem",
    },
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

// dark/light mode
function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  // change text color, bg color, placeholder color...
  const themeOptions = (mode) =>
    mode === "light"
      ? {
          // light: sua lai text color va background color
          palette: {
            primary: PRIMARY,
            secondary: SECONDARY,
            success: SUCCESS,
            text: {
              color: GREY[1000], // black
              secondary: GREY[600],
              disabled: GREY[500],
            },
            background: { paper: GREY[0], default: "#fff", neutral: GREY[200] },
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
                main: "#B31942 ",
              },
              warning: {
                main: "#B31942 ",
              },
              info: {
                main: "#0A3161",
              },
              success: {
                main: "#0A3161",
              },
            },
          },
        }
      : // dark: default
        {
          palette: {
            primary: PRIMARY,
            secondary: SECONDARY,
            success: SUCCESS,
            text: {
              primary: GREY[0], // white
              secondary: GREY[600],
              disabled: GREY[500],
            },
            background: {
              paper: GREY[1000],
              default: "#000",
              neutral: GREY[200],
            },
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
                main: "#B31942 ",
              },
              warning: {
                main: "#B31942 ",
              },
              info: {
                main: "#0A3161",
              },
              success: {
                main: "#0A3161",
              },
            },
          },
        };

  // toggle theme
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  // index custom components
  let theme = useMemo(() => createTheme(themeOptions(mode)), [mode]); // mode OR colorMode
  theme.components = customizeComponents(theme);

  //
  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} }); //??
export default ThemeProvider;
