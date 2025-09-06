import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/seu-usuario', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/seu-perfil', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:seu.email@gmail.com', icon: Mail, label: 'Email' },
  ];

  const navItems = [
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-light-200 dark:bg-dark-300 border-t border-light-400 dark:border-gray-800">
      <div className="container mx-auto px-5 md:px-10 py-6">
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-gray-900 dark:text-white mb-3"
            >
              <span className="text-primary-500">Data</span>Scientist
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs text-sm">
              Transformando dados em insights valiosos e soluções inteligentes.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Navegação</h3>
            <ul className="space-y-1.5">
              {navItems.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Conecte-se</h3>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-light-400 dark:border-gray-800 mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © {new Date().getFullYear()} Euller dos Santos Rodrigues Duarte. Todos os direitos reservados.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500/10 text-primary-600 dark:text-primary-300 px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-primary-500/20 transition-colors duration-300 flex items-center gap-1.5"
          >
            <ArrowUp size={14} />
            Voltar ao topo
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
