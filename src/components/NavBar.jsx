import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkMode";

function NavBar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:opacity-90 transition-opacity">Ulisses Abreu</Link>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-200 text-lg items-center">
          <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/projects" className="hover:text-white transition-colors">Projetos</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contato</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

