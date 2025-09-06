import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'euller.santos.duarte@gmail.com', href: 'mailto:euller.santos.duarte@gmail.com' },
    { icon: Phone, label: 'Telefone', value: '+55 (99) 99216-8287', href: 'tel:+5599992168287' },
    { icon: MapPin, label: 'Localização', value: 'Açailândia, MA', href: '#' },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-light-100 dark:bg-dark-500">
      <div className="container mx-auto px-5 md:px-10">
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Entre em <span className="text-primary-500">Contato</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Interessado em discutir oportunidades ou projetos? Vamos conversar!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Informações de Contato</h3>
              {contactInfo.map((item, index) => (
                <motion.a key={item.label} href={item.href} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="flex items-center space-x-4 p-4 bg-light-200 dark:bg-dark-400 rounded-lg border border-light-400 dark:border-gray-700 hover:border-primary-500/50 transition-all duration-300 group shadow-sm">
                  <div className="text-primary-500"><item.icon size={24} /></div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</div>
                    <div className="text-gray-800 dark:text-white font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 dark:text-white text-sm font-medium mb-2">Nome</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-light-200 dark:bg-dark-400 text-gray-800 dark:text-white rounded-lg border border-light-400 dark:border-gray-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-gray-800 dark:text-white text-sm font-medium mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-light-200 dark:bg-dark-400 text-gray-800 dark:text-white rounded-lg border border-light-400 dark:border-gray-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all" placeholder="seu.email@empresa.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-800 dark:text-white text-sm font-medium mb-2">Assunto</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-light-200 dark:bg-dark-400 text-gray-800 dark:text-white rounded-lg border border-light-400 dark:border-gray-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all" placeholder="Assunto da mensagem" />
                </div>
                <div>
                  <label className="block text-gray-800 dark:text-white text-sm font-medium mb-2">Mensagem</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-light-200 dark:bg-dark-400 text-gray-800 dark:text-white rounded-lg border border-light-400 dark:border-gray-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none" placeholder="🤝 Escreva sua mensagem..."></textarea>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading} className="w-full bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70">
                  {isLoading ? (<><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div><span>Enviando...</span></>) : (<><Send size={20} /><span>Enviar Mensagem</span></>)}
                </motion.button>
                {status === 'success' && <div className="text-green-500 text-center">Mensagem enviada com sucesso!</div>}
                {status === 'error' && <div className="text-red-500 text-center">Erro ao enviar. Tente novamente.</div>}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
