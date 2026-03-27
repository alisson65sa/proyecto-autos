import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        catalogo:  resolve(__dirname, 'catalogo.html'),
        servicios: resolve(__dirname, 'servicios.html'),
        citas:     resolve(__dirname, 'citas.html'),
        nosotros:  resolve(__dirname, 'nosotros.html'),
        contacto:  resolve(__dirname, 'contacto.html'),
        detalle:   resolve(__dirname, 'detalle.html'),
      }
    }
  }
});
