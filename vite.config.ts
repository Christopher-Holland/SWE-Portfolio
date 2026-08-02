import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Vite configuration for the portfolio.
 * Tailwind v4 is wired through the official Vite plugin so we avoid
 * a separate PostCSS pipeline and keep the toolchain lean.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
