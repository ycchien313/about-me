import fs from 'fs/promises';
import react from '@vitejs/plugin-react';
import vitePluginHtmlEnv from 'vite-plugin-html-env';

import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginHtmlEnv(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      components: resolve(__dirname, './src/components'),
      pages: resolve(__dirname, './src/pages'),
      styles: resolve(__dirname, './src/styles'),
    },
  },
  server: {
    open: true,
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    // loader: "tsx",
    // include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
  },
});
