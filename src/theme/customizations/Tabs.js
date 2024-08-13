import { PRIMARY, SECONDARY } from "../index";

// blog profile tabs
function Tabs(theme) {
  //
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
          padding: 0,
          margin: 0,
          fontWeight: 600,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          textTransform: "capitalize", //?

          borderRadius: "1%", //?

          "&.Mui-selected": {
            color: theme.palette.text.primary,
          },
          "&:not(:last-of-type)": {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1),
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
          },
          // responsive
          "@media (min-width: 768px)": {
            minWidth: 48,
          },
        },
        labelIcon: {
          minHeight: 48,
          flexDirection: "row",
          "& > *:first-of-type": {
            marginBottom: 0,
            marginRight: theme.spacing(1),
          },
        },
        wrapper: {
          flexDirection: "row",
          whiteSpace: "nowrap",
        },
        textColorInherit: {
          opacity: 0,
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTabScrollButton: {
      styleOverrides: {
        root: {
          width: 48, // !?
          borderRadius: "30%",
        },
      },
    },
  };
}

export default Tabs;
