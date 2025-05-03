import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00bcd4",
    },
    background: {
      default: "#14161a",
      paper: "#1e2026",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export default theme;
