import React from "react";
import DarkModeButton from "./DarkMode";
import LinkAnimado from "./LinkAnimado";

function NavBar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <ul className="flex justify-around items-center">
        <div className="text-3xl font-bold">
            <li><a href="#" className="hover:text-[1.9rem] transition-all ">Ulisses Abreu</a></li>
        </div>

        <div className="flex gap-10 text-gray-200 text-lg">
            <li><LinkAnimado href="#">Sobre</LinkAnimado></li>
            <li><LinkAnimado href="#">Projetos</LinkAnimado></li>
            <li><LinkAnimado href="#">Contato</LinkAnimado></li>
        </div>

        <div className="items-center">
            <DarkModeButton />
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;

