import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ulisseswrk',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ulisses-abreu/',
      icon: FaLinkedin
    }
  ];

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-green-400 transform hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Ulisses Abreu. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;