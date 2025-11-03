import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-6 md:px-12 pt-20 flex justify-between items-center">
        {/* Texto do lado esquerdo*/}
        <div className="max-w-xl z-10">
          <div className="inline-block bg-gray-200 px-4 py-1 rounded-full mb-4 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer">
            <p className="text-base font-medium">FUTURO CIENTISTA DE DADOS</p>
          </div>

          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Precisa de ajuda?
            <br />
            Deixa comigo!
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Sou Estudante de Engenharia de Software na FIAP
            <br />
            Mas atualmente, meu foco é em machine learning
          </p>

          <button className="bg-gray-400 hover:bg-gray-600 hover:text-white text-black px-8 py-3 rounded-lg font-medium transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            SAIBA MAIS
          </button>

          {/* Dados Pessoais */}
          <div className="mt-8 flex gap-6 2xl:mt-8 2xl:gap-12 bg-gray-100 dark:bg-gray-800 px-4 md:px-10 py-2 md:py-3 rounded xl:mb-10">
            <div className="group cursor-pointer">
              <span className="text-5xl font-bold text-gray-900 dark:text-white transform transition-transform group-hover:scale-105">2</span>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-200">
                Anos de  
                <br />
                Eperiência
              </p>
            </div>
            <div className="group cursor-pointer">
              <span className="text-5xl font-bold text-gray-900 dark:text-white transform transition-transform group-hover:scale-105">20+</span>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-200">
                Projetos Concluídos
                <br />
                Durante minha jornada
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
      {/* Sobre Mim - Seção logo embaixo do Home */}
      <section className="w-full text-gray-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto py-20 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 ">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:h-[3px] after:w-0 after:bg-gray-300 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full mb-8 hover:cursor-default">
                Sobre Mim
              </span>
            </h2>
            
            <p className="text-lg text-gray-900 dark:text-gray-300 leading-relaxed mb-8">
              Busco minha primeira oportunidade na área de Dados, tenho uma sólida base em programação e muita vontade de aprender e crescer profissionalmente. Estou pronto para aplicar e aprimorar minhas habilidades em Dados, Engenharia de Software e resolução de problemas.
              Atualmente cursando Bacharelado em Engenharia de Software na FIAP, com previsão de conclusão em 2028. Tenho inglês avançado (B1) e experiência em projetos acadêmicos que aplicam tecnologia pra resolver os mais variados problemas.
            </p>

            <Link to="/contact" className="inline-block border border-gray-500 px-4 py-3 rounded-md hover:bg-gray-400 hover:text-gray-100 transition-colors dark:border-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Entrar em Contato
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-80 h-80 bg-white dark:bg-gray-800 overflow-hidden">
              <img src="/eu-site.jpg" alt="Foto de Perfil" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
