import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeSnippet from './CodeSnippet';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-16 md:py-20 bg-light-200 dark:bg-dark-300">
      <div className="container mx-auto px-5 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Sobre <span className="text-primary-500">Mim</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-primary-500 dark:text-primary-400 mb-4">
                Minha Jornada na Ciência de Dados
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-justify md:indent-8">
                Sou graduando em <strong className="text-gray-900 dark:text-white">Engenharia Elétrica</strong> pelo 
                Instituto Federal de Educação, Ciência e Tecnologia do Maranhão e venho direcionando 
                minha formação para a área de <strong className="text-gray-900 dark:text-white">Ciência de Dados</strong>. 
                Tenho me dedicado ao estudo de <strong className="text-gray-900 dark:text-white">linguagens de programação</strong>, 
                <strong className="text-gray-900 dark:text-white"> ferramentas analíticas</strong>, <strong className="text-gray-900 dark:text-white">
                Métricas de Negócios</strong> e <strong className="text-gray-900 dark:text-white">fundamentos estatísticos</strong>, 
                sempre com ênfase no pensamento crítico e na resolução de problemas reais.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-justify md:indent-8">
                Atualmente, desenvolvo projetos práticos utilizando dados públicos, aplicando técnicas 
                de análise, visualização e modelagem para transformar informações em ideias relevantes. 
                Estou em busca de uma oportunidade para atuar profissionalmente como 
                <strong className="text-gray-900 dark:text-white"> Cientista de Dados</strong>, contribuindo para a melhoria 
                da tomada de decisão nas empresas por meio da construção de soluções orientadas a dados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CodeSnippet />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
