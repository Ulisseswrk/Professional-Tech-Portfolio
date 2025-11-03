import React from "react";

function LinkAnimado({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="relative text-[18px] font-medium
                 after:absolute after:left-0 after:bottom-[-4px]
                 after:h-[2px] after:w-0 after:bg-[#c5bdbd]
                 after:transition-all after:duration-400
                 hover:after:w-full"
    >
      {children}
    </a>
  );
}

export default LinkAnimado;