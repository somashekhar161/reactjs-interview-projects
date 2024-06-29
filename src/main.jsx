import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FeatureFlagProvider } from "./context/featureFlagContextProvider.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <FeatureFlagProvider>
      <App />
    </FeatureFlagProvider>
  </ThemeProvider>,
);
