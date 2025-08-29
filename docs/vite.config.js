// vite.config.js (в корне репо ant1malware/pravo)
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/pravo/',       // имя репозитория (URL будет ...github.io/pravo/)
  build: { outDir: 'docs' } // билд сразу в /docs для GitHub Pages
});
