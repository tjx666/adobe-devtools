import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import optimizer from 'vite-plugin-optimizer';
import tsconfig from './tsconfig.json';

export default defineConfig({
    plugins: [
        vue(),
        optimizer({
            path: () => ({
                find: /^path$/,
                code: `const path = require('path'); export { path as default }`,
            }),
        }),
    ],
    esbuild: {
        target: tsconfig.compilerOptions.target,
    },
});
