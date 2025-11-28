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
						{ label: 'Introduction', slug: 'netcode/introduction' },
						{ label: 'Network Objects', slug: 'netcode/networkobject' },
						{ label: 'Network Transform', slug: 'netcode/networktransform' },
					],

				},
				{
					label: 'Player',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Movement', slug: 'player/movement' },
						{ label: 'Camera', slug: 'player/camera' },
					],

				}
			],
		}),
	],
});
