import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

export const theme = createTheme({
  palette: {
    common: {
      black: "#210306",
      white: "#f5f5f5",
    },
    // golden color
    primary: {
      main: "#c0a661",
      contrastText: "#f5f5f5",
    },
    secondary: {
      main: "#f5f5f5",
    },
    // black and white colors for text
    text: {
      primary: "#210306",
      secondary: "#c0a661",
    },
    // background color
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    // Titles
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Lato",
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Montserrat",
      textTransform: "uppercase",
      fontSize: "1.125rem",
      fontWeight: 700,
    },
    // Body text
    body1: {
      fontFamily: "Lato",
    },
    // Navbar and Footer text
    body2: {
      fontFamily: "Mulish",
      fontSize: "1rem",
    },
  },
  // Change Components css
  components: {
    // Button css
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Mulish",
          textTransform: "none",
        },
        textInfo: {
          backgroundColor: "red",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          [breakpoints.down("md")]: {
            fontSize: "3rem",
          },
        },
        h5: {
          [breakpoints.down("md")]: {
            fontSize: "1.125rem",
          },
        },
        h6: {
          [breakpoints.down("md")]: {
            fontSize: "1rem",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#210306",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#210306",
        },
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#210306",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
          marginLeft: 0,
          fontFamily: "Lato",
        },
      },
    },
  },
});
