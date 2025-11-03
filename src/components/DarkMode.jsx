import React, { useState } from "react";

function DarkModeButton() {
  const [Dark, Claro] = useState(false);

  return (
    <button
      onClick={() => Claro(!Dark)}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 
        ${Dark ? "bg-gray-300" : "bg-gray-700"}`}
    >
      <span className="absolute left-2 top-1.5 text-xs">☀️</span>
      <span className="absolute right-2 top-1.5 text-xs">🌙</span>

      <span
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md 
          transform transition-transform duration-300 ease-in-out
          ${Dark ? "translate-x-8" : "translate-x-0"}`}
      />
    </button>
  );
}

export default DarkModeButton;