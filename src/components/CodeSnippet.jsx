import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const codeString = [
  `<span class="text-purple-400">import</span> pandas <span class="text-purple-400">as</span> pd`,
  `<span class="text-purple-400">from</span> sklearn.ensemble <span class="text-purple-400">import</span> <span class="text-cyan-400">RandomForestRegressor</span>`,
  ``,
  `<span class="text-gray-500"># Carregando os dados</span>`,
  `df = pd.<span class="text-yellow-300">read_csv</span>(<span class="text-green-400">"house_prices.csv"</span>)`,
  `X = df.<span class="text-yellow-300">drop</span>(<span class="text-green-400">"price"</span>, axis=<span class="text-orange-400">1</span>)`,
  `y = df[<span class="text-green-400">"price"</span>]`,
  ``,
  `<span class="text-gray-500"># Treinando o modelo</span>`,
  `model = <span class="text-cyan-400">RandomForestRegressor</span>(n_estimators=<span class="text-orange-400">100</span>)`,
  `model.<span class="text-yellow-300">fit</span>(X, y)`,
  ``,
  `<span class="text-gray-500"># Fazendo uma nova predição</span>`,
  `prediction = model.<span class="text-yellow-300">predict</span>(X.head(<span class="text-orange-400">1</span>))`,
  `<span class="text-purple-400">print</span>(f<span class="text-green-400">"Previsão: R$ {prediction[0]:.2f}"</span>)`
].join('\n');


const CodeSnippet = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [codeString],
      typeSpeed: 25,
      showCursor: true,
      cursorChar: '_',
      onComplete: () => {
        const timeoutId = setTimeout(() => {
          if (typedInstance.current) {
            typedInstance.current.reset();
          }
        }, 3000);
        
        return () => clearTimeout(timeoutId);
      },
    };

    typedInstance.current = new Typed(typedRef.current, options);

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-200 rounded-lg overflow-hidden shadow-2xl border border-gray-700 h-[410px] flex flex-col"
    >
      <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700 flex-shrink-0">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-gray-400 text-sm">machine_learning.py</span>
      </div>

      <div className="p-6 font-mono text-sm text-gray-300 flex-grow overflow-y-auto">
        <pre className="whitespace-pre-wrap">
          <span ref={typedRef}></span>
        </pre>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
