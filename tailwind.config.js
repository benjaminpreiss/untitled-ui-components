import untitledPlugin from './src/lib/tailwindPlugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'untitled-primary': {
					50: '#fdf8f6',
					100: '#f2e8e5',
					200: '#43302b'
				}
			}
		}
	},
	plugins: [untitledPlugin]
};
