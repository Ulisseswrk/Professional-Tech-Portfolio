import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkMode";
import LinkAnimado from "./LinkAnimado";

function NavBar() {
  return (
    <nav className="bg-blue-900 text-white p-4 dark:bg-slate-900 dark:text-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-[1.55rem] transition-all">Ulisses Abreu</Link>
        </div>

        <ul className="hidden md:flex gap-10 text-white text-lg items-center">
          <li><LinkAnimado to="/" className="text-white hover:text-gray-200 transition-colors">Home</LinkAnimado></li>
          <li><LinkAnimado to="/projects" className="text-white hover:text-gray-200 transition-colors">Projetos</LinkAnimado></li>
          <li><LinkAnimado to="/contact" className="text-white hover:text-gray-200 transition-colors">Contato</LinkAnimado></li>
        </ul>

        <div className="flex items-center gap-4">
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

