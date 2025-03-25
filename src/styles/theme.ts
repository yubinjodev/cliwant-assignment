import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3A86FF",
    },
    secondary: {
      main: "#8338ec",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
});

theme = responsiveFontSizes(theme);
export { theme };
