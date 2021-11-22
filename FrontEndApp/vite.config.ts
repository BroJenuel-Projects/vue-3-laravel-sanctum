import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

// for more configuration check vites website =>  https://vitejs.dev/config/
export default ({ mode }) => {
    require('dotenv').config({ path: `./../.env` }); // this will grab and read the `.env` file
    const isDevelopment = process.env.APP_ENV && process.env.APP_ENV == 'local'; // check If its in Development mode using the env

    return defineConfig({
        build: {
            outDir: './../public/app',
        },
        base: isDevelopment ? '/' : '/app/',
        plugins: [vue(), WindiCSS()],
    });
};
