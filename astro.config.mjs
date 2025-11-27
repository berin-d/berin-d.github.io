import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://berin-d.github.io',
    base: '/app',
    integrations: [
        starlight({
            title: 'App',
            sidebar: [
                {
                    label: 'App',
                    collapsed: false,
                    items: [
                        { label: 'Accueil', link: 'app/' },
                        { label: 'Pages', link: 'app/pages/about' },
                    ],
                },
                {
                    label: 'AfterWiki',
                    collapsed: false,
                    items: [
                        { label: 'Accueil', link: '/app/afterwiki/' },
                        { label: 'Intro', link: '/app/afterwiki/intro' },
                        { label: 'NetCode', link: '/app/afterwiki/netcode' },
                        { label: 'Guide', link: '/app/afterwiki/guide' },
                    ],
                },
            ],
            customCss: [
                './public/style.css',
            ],
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
