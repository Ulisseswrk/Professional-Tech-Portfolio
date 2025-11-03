import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();

  // Simula uma base de dados de projetos (você deve substituir com seus projetos reais)
  const projects = {
    1: {
      title: "Portfolio Website",
      description: "Site pessoal desenvolvido com React e Tailwind CSS, focando em design responsivo e acessibilidade.",
      longDescription: "Este projeto foi desenvolvido como parte do meu aprendizado em React e Tailwind CSS. Implementei recursos como modo escuro, animações suaves e design responsivo para diferentes tamanhos de tela.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "React Router"],
      github: "https://github.com/seu-usuario/portfolio",
      liveDemo: "https://seu-portfolio.vercel.app",
      images: ["/project1.jpg", "/project1-detail.jpg"],
    },
    // Adicione mais projetos aqui
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projeto não encontrado</h2>
          <Link to="/projects" className="text-blue-600 hover:underline">
            Voltar para Projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Voltar para Projetos
        </Link>

        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sobre o Projeto</h2>
          <p className="text-gray-600 mb-6">{project.longDescription}</p>

          <h3 className="text-xl font-semibold mb-3">Tecnologias Utilizadas</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaExternalLinkAlt /> Demo ao Vivo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;