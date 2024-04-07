import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My Awesome Project",
    description: "A VitePress Site",
    themeConfig: {
        logo: "/logo.svg",
        // https://vitepress.dev/reference/default-theme-config
        algolia: {
            // algolia 搜索服务 与 内置 search 可二选一
            appId: "SHDNEYGA8Z",
            apiKey: "91419401b0b0efd31b610e54e5b97249",
            indexName: "vue-amazing-ui",
        },
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present The Muse Catcher",
        },
    },
});
