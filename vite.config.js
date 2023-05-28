import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/src/main.js"],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false,
                },
            },
        }),
        vueI18n({
            include: path.resolve("resources/js/src/locales/**"),
        }),
    ],
    optimizeDeps: {
        include: ["quill", "nouislider"],
    },
    assetsInclude: ["resources/js/src/assets"],
    resolve: {
        alias: [
            {
                find: /^~(.*)$/,
                replacement: "node_modules/$1",
            },
        ],
    },
});
