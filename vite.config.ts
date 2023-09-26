import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import { extname, relative, resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ['src'],
      exclude: ['**/*.stories.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    minify: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync('src/**/!(*.stories).{ts,tsx}').map((file) => {
          return [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ];
        })
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
