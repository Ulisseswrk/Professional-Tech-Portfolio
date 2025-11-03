import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dados = Object.fromEntries(formData);
    alert(`Mensagem recebida!\n\nNome: ${dados.name}\nEmail: ${dados.email}\nMensagem: ${dados.message}`);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-6">Me encontre nas redes sociais</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Ulisseswrk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ulisses-abreu/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;