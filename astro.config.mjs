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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Hercule-26/Game/tree/develop' }],
			sidebar: [

				{
					label: 'Introduction',
					items: [
						{ label: 'Architecture', slug: 'introduction/architecture' },
					],

				},
				{
					label: 'Netcode',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Netcode', slug: 'netcode/introduction' },
						{ label: 'Camera', slug: 'netcode/camera' },
					],

				}
			],
		}),
	],
});
