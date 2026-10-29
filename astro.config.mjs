// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://ajcj97.github.io/', 
    
    base: '/',                  

    outDir: './dist',
    trailingSlash: 'always',
    output: 'static',
    vite: {
        plugins: [tailwindcss()],
    },
    
    integrations: [react()],
});