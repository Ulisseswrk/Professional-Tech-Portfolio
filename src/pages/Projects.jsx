import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Lista de projetos (você pode expandir com seus próprios projetos)
  const listaprojetos = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Site pessoal desenvolvido com React e Tailwind",
      tags: ["React", "Tailwind", "JavaScript"],
      image: "/project1.jpg"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Dashboard administrativo para e-commerce",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "/project2.jpg"
    },
    // Adicione mais projetos aqui
  ];

  // Filtra os projetos com base nos termos da busca
  const filteredProjects = listaprojetos.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
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
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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