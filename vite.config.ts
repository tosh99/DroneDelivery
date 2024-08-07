import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src',
            components: '/src/services/ui-components',
            models: '/src/services/models',
            hooks: '/src/services/hooks',
            constants: '/src/services/constants',
            core: '/src/services/core',
            utils: '/src/services/ui-utils',
        },
    },
    server: {
        port: 2002,
    },
});
