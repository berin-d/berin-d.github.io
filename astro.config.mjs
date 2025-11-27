// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://berin-d.github.io/',
	base: '/',
	integrations: [
		starlight({
			title: 'AfterWiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Intro', slug: 'introduction/intro' },
					],
				},

			],
		}),
	],
});
