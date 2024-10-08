//
function Card(theme) {
  // MuiCard, MuiCardHeader...: className of MUI
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          border: "2px solid  #0A3161", // ? border color
          borderRadius: "1%", // ?
        },
      },
    },

    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: {
          variant: "body2",
          marginTop: theme.spacing(0.5),
        },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },

    MuiGridContainer: {
      styleOverrides: {
        root: {
          marginLeft: "0",
        },
      },
    },

    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "unset" } },
    },
  };
}

export default Card;
