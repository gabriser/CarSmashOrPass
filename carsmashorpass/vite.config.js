import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// exponer hacia fuera de local (solo router)
/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173, // Puedes cambiar el puerto si lo deseas
    },
});*/