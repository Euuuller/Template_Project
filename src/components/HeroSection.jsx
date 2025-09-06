import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import Typed from 'typed.js';

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Cientista de Dados',
        'Data Science',
        'Graduando em Engenharia Elétrica',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-32 lg:pt-0">
      <div className="container mx-auto px-5 md:px-10 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture (first in code for mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-700 rounded-full animate-glow opacity-50"></div>
              <img 
                src="./assets/images/1_Image.jpg"
                alt="Foto de perfil de Euller Duarte"
                className="relative w-full h-full object-cover rounded-full border-4 border-light-100 dark:border-dark-500 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text Content (second in code for mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:order-1"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Olá, eu sou{' '}
              <span className="text-primary-500">Euller dos Santos Rodrigues Duarte</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 h-8">
               <span 
                ref={typedRef} 
                className="bg-gradient-to-r from-primary-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-text-gradient"
                style={{ backgroundSize: '200% auto' }}
              ></span>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed md:text-justify md:indent-8">
              Olá, seja muito bem-vindo (a) ao meu portfólio de projetos de Ciência de Dados. Nessa página, eu demonstro minhas habilidades de resolver problemas de negócio utilizando conceitos e ferramentas da Ciência de Dados, através de projetos com dados públicos. Você vai encontrar também, habilidades, ferramentas e conceitos envolvendo a Ciência de Dados. Sinta-se à vontade para entrar em contato através dos links no final da página.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold 
                        hover:bg-primary-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Ver Projetos
                <ArrowDown size={20} />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/assets/resume/CV_Seu_Nome.pdf"
                download
                className="border-2 border-primary-500 text-primary-500 dark:text-primary-400 px-6 py-3 rounded-lg 
                        font-semibold hover:bg-primary-500 hover:text-white transition-all 
                        duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
