import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Lista de projetos (coloquei só alguns, tenho realmente muitos klkkk)
  const listaprojetos = [
    {
      id: 1,
      title: "Watercall Solutions",
      description: "Site pra GS da FIAP focando em features e personalização.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "projeto1.png",
      github: "https://ulisseswrk.github.io/Landing-Page-Watercall/"
    },
    {
      id: 2,
      title: "Portal Passa a Bola ",
      description: "Site de esportes focado em interatividade e responsividade.",
      tags: ["React", "Tailwind", "JavaScript"],
      image: "projeto2.png",
      github: "https://front-end-design-web-development-sp.vercel.app/"
    },
    {
      id: 3,
      title: "Pipeline de limpeza de dados",
      description: "Pipeline automatizado para limpeza e pré-processamento de dados.",
      tags: ["Python", "Pandas"],
      image: "projeto3.png",
      github: "https://front-end-design-web-development-sp.vercel.app/"
    },
    
  ];

  // Filtra os projetos com base nos termos da busca
  const filteredProjects = listaprojetos.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
        {/* Barrinha de busca do site */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar projetos..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de Projetos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <a
              key={project.id}
              href={project.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
            >
              <img
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 text-xl">
            Nenhum projeto localizado
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;