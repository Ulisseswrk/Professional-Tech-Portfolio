import React from "react";

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-6 md:px-12 pt-20 flex justify-between items-center">
        {/* Lado Esquerdo - Texto */}
        <div className="max-w-xl z-10">
          <div className="inline-block bg-gray-200 px-4 py-1 rounded-full mb-4">
            <p className="text-base font-medium">FUTURO CIENTISTA DE DADOS</p>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Precisa de ajuda?
            <br />
            Deixa comigo!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Sou Estudante de Engenharia de Software na FIAP
            <br />
            Mas atualmente, meu foco é em machine learning
          </p>
          
          <button className="bg-gray-400 hover:bg-gray-600 hover:text-white text-black px-8 py-3 rounded-lg font-medium transition-colors">
            LET'S CHAT
          </button>

          {/* Métricas */}
          <div className="mt-16 flex gap-12 bg-gray-100 px-10 py-3">
            <div>
              <span className="text-5xl font-bold text-gray-900">12</span>
              <p className="text-lg text-gray-600 mt-2">
                YEARS
                <br />
                EXPERIENCE
              </p>
            </div>
            <div>
              <span className="text-5xl font-bold text-gray-900">165</span>
              <p className="text-lg text-gray-600 mt-2">
                PROJECTS COMPLETED
                <br />
                ON 18 COUNTRIES
              </p>
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem */}
        <div className="relative max-1150:hidden">
          <img 
            src="/boneco-ulisses.png" 
            alt="Boneco do Ulisses" 
            className="h-[65vh] w-auto object-contain relative z-0"/>
        </div>
        
      </div>

      
    </div>
  );
}

export default Home;