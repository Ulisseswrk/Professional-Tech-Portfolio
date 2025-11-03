import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
      className="p-2 rounded-md hover:bg-blue-800 transition-colors text-white"
    >
      {darkMode ? <FaSun className="text-xl text-yellow-300" /> : <FaMoon className="text-xl text-blue-200" />}
    </button>
  );
}

export default DarkModeButton;