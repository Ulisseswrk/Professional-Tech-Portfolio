import React from "react";

// Simple animated link: hover underline. Kept minimal for accessibility.
function LinkAnimado({ children, href = "#" }) {
  return (
    <a href={href} className="text-lg font-medium hover:underline">
      {children}
    </a>
  );
}

export default LinkAnimado;