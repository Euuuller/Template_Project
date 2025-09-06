import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Filter, X, Calendar, Code, Target, TrendingUp } from 'lucide-react';
import projectsData from '../data/projects.json';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['all', 'Machine Learning', 'Data Visualization', 'NLP'];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-light-200 dark:bg-dark-300">
      <div className="container mx-auto px-5 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meus <span className="text-primary-500">Projetos</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore alguns dos meus projetos mais recentes em ciência de dados, 
              machine learning e análise preditiva.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center mb-12 gap-2">
            <Filter className="text-primary-500 mr-2 hidden sm:block" size={20} />
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-light-300 dark:bg-dark-400 text-gray-700 dark:text-gray-300 hover:bg-light-400 dark:hover:bg-dark-100'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-light-100 dark:bg-dark-400 rounded-lg overflow-hidden border border-light-400 dark:border-gray-700 hover:border-primary-500/50 transition-all duration-300 group shadow-lg dark:shadow-none"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-500/20 text-primary-600 dark:text-primary-300 text-xs rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600/20 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openProjectModal(project)}
                      className="bg-primary-500/10 text-primary-600 dark:text-primary-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-500/20 transition-colors duration-300 flex items-center gap-2"
                    >
                      <TrendingUp size={16} />
                      <span>Detalhes</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="bg-light-200 dark:bg-dark-400 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-light-400 dark:border-gray-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-600 dark:text-primary-300 text-sm rounded-full border border-primary-500/30">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={closeProjectModal}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Target className="mr-2 text-primary-500" size={20} />
                      Descrição do Projeto
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Calendar className="mr-2 text-primary-500" size={20} />
                      Informações Gerais
                    </h4>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                      <div className="flex justify-between"><span>Categoria:</span><span className="font-medium text-primary-600 dark:text-primary-400">{selectedProject.category}</span></div>
                      <div className="flex justify-between"><span>Status:</span><span className="font-medium text-green-600 dark:text-green-400">Concluído</span></div>
                      <div className="flex justify-between"><span>Duração:</span><span className="font-medium text-primary-600 dark:text-primary-400">2-3 semanas</span></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Code className="mr-2 text-primary-500" size={20} />
                      Tecnologias Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary-500/20 text-primary-600 dark:text-primary-300 text-xs rounded-full border border-primary-500/30">{tech}</span>
                      ))}
                    </div>

                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Principais Resultados</h4>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start"><span className="text-primary-500 mr-2 mt-1">•</span>Modelo com alta precisão e performance otimizada</li>
                      <li className="flex items-start"><span className="text-primary-500 mr-2 mt-1">•</span>Visualizações interativas e insights acionáveis</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 pt-6 border-t border-light-400 dark:border-gray-700">
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Github size={20} /><span>Ver Código</span>
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="border-2 border-primary-500 text-primary-500 dark:text-primary-400 px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <ExternalLink size={20} /><span>Ver Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
