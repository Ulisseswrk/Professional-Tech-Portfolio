import React from "react";
import { Link } from "react-router-dom";

function LinkAnimado({ children, to, href = "#", className = "" }) {
  const base =
    "relative text-[18px] font-medium after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gray-600 after:transition-all after:duration-300 hover:after:w-full";

  if (to) {
    return (
      <Link to={to} className={`${base} ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={`${base} ${className}`.trim()}>
      {children}
    </a>
  );
}

export default LinkAnimado;