import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CryptoContext from "./components/CryptoContext.jsx";
import "react-alice-carousel/lib/alice-carousel.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CryptoContext>
        <App />
      </CryptoContext>
    </ThemeProvider>
  </StrictMode>
);
