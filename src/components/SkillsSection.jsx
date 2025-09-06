import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import skillsData from '../data/skills.json';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: 'languages', label: 'Linguagens & BDs', data: skillsData.languages },
    { id: 'visualization', label: 'Visualização', data: skillsData.visualization },
    { id: 'ml', label: 'ML & Estatística', data: skillsData.ml },
    { id: 'engineering', label: 'Engenharia de Software', data: skillsData.engineering },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-light-100 dark:bg-dark-500">
      <div className="container mx-auto px-5 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Habilidades & <span className="text-primary-500">Ferramentas</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 border-2 text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/25'
                    : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-primary-400 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {tabs.find(tab => tab.id === activeTab)?.data.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                    y: -5
                  }}
                  className="bg-light-200 dark:bg-dark-400 p-4 md:p-6 rounded-xl border border-light-400 dark:border-gray-700 hover:border-primary-500/50 transition-all duration-300 group flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center mb-4 h-12 md:h-16">
                    <img 
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="text-4xl hidden">{skill.name.charAt(0)}</div>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow hidden sm:block">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
