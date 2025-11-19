import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://drustinbelmont.github.io',
    base: '/app',
    integrations: [
        starlight({
            title: 'Ma Mini App',
            sidebar: [
                {
                    label: 'Accueil',
                    link: '/',
                },
                {
                    label: 'Deuxième page',
                    link: '/about',
                },
            ],
        }),
    ],
});
