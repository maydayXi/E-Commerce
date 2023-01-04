import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const theme = createTheme({
    palette: {
        primary: {
            white: "#F8F8F8",
            light: "#b8a6aa",
            main: "#864151",
            dark: "#1c1517",
        },
    },
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
