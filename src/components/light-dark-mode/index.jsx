import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";
import { useTheme } from "../../context/ThemeProvider";
const LightDarkMode = () => {
  const { Theme, ToggleTheme } = useTheme();

  return (
    <div className="light-dark-mode " data-theme={Theme}>
      <div className={`container `}>
        <p className="">Hello World!</p>
        <button
          className="rounded  bg-black p-4 text-white shadow-lg shadow-gray-400 dark:bg-white dark:text-black"
          onClick={ToggleTheme}
        >
          Change Theme {Theme}
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
