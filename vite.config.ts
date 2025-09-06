import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Template_Project/',
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
