# 🚀 Portfólio de Ciência de Dados - Template Profissional

> Um template moderno e responsivo para cientistas de dados apresentarem seus projetos, habilidades e experiências de forma impactante e profissional.

![Portfolio Preview](https://img.shields.io/badge/Status-Ativo-brightgreen) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![Vite](https://img.shields.io/badge/Vite-6.3.5-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-cyan)

## 📋 Introdução

Este portfólio foi cuidadosamente desenvolvido para servir como uma **vitrine profissional completa** para cientistas de dados, analistas e profissionais da área de tecnologia. O template combina design moderno, animações fluidas e uma estrutura organizada para destacar suas competências técnicas, projetos realizados e trajetória profissional de forma clara e impactante.

Com foco na experiência do usuário e responsividade, este template garante que seu portfólio seja acessível e visualmente atraente em qualquer dispositivo, desde desktops até smartphones.

## ✨ Recursos Principais

### 🎯 **Seção Hero Dinâmica**
- Apresentação pessoal com efeito de digitação animado
- Foto de perfil com efeitos visuais elegantes
- Botões de ação para navegação rápida

### 📊 **Portfólio de Projetos**
- Galeria interativa com filtros por categoria
- Modal detalhado para cada projeto
- Integração com tecnologias utilizadas
- Links diretos para repositórios e demonstrações

### 🛠️ **Área de Habilidades Técnicas**
- Organização por categorias (Linguagens, ML, Visualização, Engenharia)
- Ícones representativos para cada tecnologia
- Animações suaves de entrada

### 👨‍💼 **Biografia Profissional**
- Seção "Sobre Mim" com narrativa envolvente
- Snippet de código interativo
- Destaque para formação e objetivos

### 📞 **Formulário de Contato**
- Integração com EmailJS para envio direto
- Validação de campos em tempo real
- Design responsivo e acessível

### 🌙 **Tema Escuro/Claro**
- Alternância suave entre temas
- Persistência da preferência do usuário
- Otimizado para diferentes condições de iluminação

## 🚀 Como Utilizar

### **Instalação Inicial**

1. **Clone ou baixe o projeto:**
   ```bash
   git clone [seu-repositorio]
   cd data-science-portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

### **Personalização do Conteúdo**

#### 📝 **Informações Pessoais**
- **Arquivo:** `src/components/HeroSection.jsx`
- Atualize nome, título profissional e descrição
- Substitua a foto de perfil em `public/assets/images/`

#### 🗂️ **Adicionando Projetos**
- **Arquivo:** `src/data/projects.json`
- Estrutura do projeto:
  ```json
  {
    "id": 1,
    "title": "Nome do Projeto",
    "description": "Descrição detalhada",
    "image": "/assets/images/projeto.jpg",
    "category": "Machine Learning",
    "technologies": ["Python", "Pandas", "Scikit-learn"],
    "github": "https://github.com/usuario/projeto",
    "demo": "https://projeto-demo.com"
  }
  ```

#### 🎯 **Habilidades Técnicas**
- **Arquivo:** `src/data/skills.json`
- Organize por categorias: `languages`, `visualization`, `ml`, `engineering`
- Adicione ícones SVG em `public/assets/icons/`

#### ✏️ **Biografia**
- **Arquivo:** `src/components/AboutSection.jsx`
- Personalize sua história profissional
- Ajuste o snippet de código no `CodeSnippet.jsx`

### **Configuração do Formulário de Contato**

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Configure seu serviço de email
3. Atualize as credenciais em `src/components/ContactSection.jsx`:
   ```javascript
   const serviceId = 'seu_service_id';
   const templateId = 'seu_template_id';
   const publicKey = 'sua_public_key';
   ```

## 🛠️ Tecnologias Utilizadas

### **Frontend Core**
- **React 19.1.0** - Biblioteca principal para interface
- **Vite 6.3.5** - Build tool moderna e rápida
- **TailwindCSS 3.4.1** - Framework CSS utilitário

### **Animações e Interatividade**
- **Framer Motion 11.0.0** - Animações fluidas e transições
- **Typed.js 2.1.0** - Efeito de digitação dinâmica
- **React Intersection Observer 9.8.1** - Animações baseadas em scroll

### **Ícones e UI**
- **Lucide React 0.511.0** - Biblioteca de ícones moderna
- **React Particles 2.12.2** - Efeitos de partículas no background

### **Comunicação**
- **EmailJS Browser 4.3.3** - Envio de emails sem backend
- **Axios 1.9.0** - Cliente HTTP para requisições

### **Deploy e Qualidade**
- **ESLint 9.27.0** - Linting e qualidade de código
- **GitHub Pages 6.1.1** - Deploy automatizado
- **PostCSS & Autoprefixer** - Processamento CSS otimizado

## 🎨 Personalização Avançada

### **Cores e Tema**
- **Arquivo:** `tailwind.config.js`
- Personalize a paleta de cores primárias
- Ajuste breakpoints responsivos

### **Animações Customizadas**
- **Arquivo:** `src/components/AnimatedBackground.jsx`
- Modifique efeitos de partículas
- Crie novas animações com Framer Motion

### **Layout Responsivo**
- Todas as seções são totalmente responsivas
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

### **SEO e Performance**
- Meta tags otimizadas no `index.html`
- Lazy loading de imagens
- Otimização de bundle com Vite

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor local com hot reload

# Produção
npm run build        # Build otimizado para produção
npm run preview      # Preview do build local

# Deploy
npm run deploy       # Deploy automático no GitHub Pages

# Qualidade
npm run lint         # Verificação de código com ESLint
```

## 🌐 Deploy

### **GitHub Pages (Recomendado)**
1. Configure o repositório no GitHub
2. Atualize a URL no `package.json`:
   ```json
   "homepage": "https://seu-usuario.github.io/seu-repositorio"
   ```
3. Execute: `npm run deploy`

### **Outras Plataformas**
- **Netlify:** Conecte diretamente ao repositório
- **Vercel:** Deploy automático com integração Git
- **Surge.sh:** Deploy rápido com `surge dist/`

## 📞 Contato

**Euller dos Santos Rodrigues Duarte**  
🎓 *Analista Preditivo & Cientista de Dados*

- 📧 **Email:** [seu-email@exemplo.com](mailto:seu-email@exemplo.com)
- 💼 **LinkedIn:** [linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)
- 🐙 **GitHub:** [github.com/seu-usuario](https://github.com/seu-usuario)
- 🌐 **Portfólio:** [seu-portfolio.com](https://seu-portfolio.com)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

<div align="center">
  <p><strong>Desenvolvido com ❤️ para a comunidade de Ciência de Dados</strong></p>
  <p><em>"Transformando dados em insights, código em soluções."</em></p>
</div>