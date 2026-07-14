import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // ✅ Fixed: Changed from '@vitejs/react-swc'
import tailwindcss from '@tailwindcss/vite';   // Added if you are running Tailwind CSS v4

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
});