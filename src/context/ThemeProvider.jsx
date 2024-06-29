import React, { createContext, useContext, useState } from "react";
import useLocalStorage from "../components/light-dark-mode/useLocalStorage";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useLocalStorage("theme", "light");
  const ToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ Theme, ToggleTheme }}>
      <div className={` ${Theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useTheme must be used within an must be used within an ThemeProvider",
    );
  }
  return context;
};
