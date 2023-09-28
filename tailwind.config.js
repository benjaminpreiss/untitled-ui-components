import untitledPlugin from './src/lib/tailwindPlugin';
import { colors } from './src/lib/tailwindPlugin';

/** @type {import('tailwindcss').Config} */

const generateClassNames = (colors) => {
	return Object.values(colors).flatMap((mainValue) => {
		return Object.entries(mainValue).flatMap(([colorKey, colorValue]) => {
			const formattedColorKey = colorKey.replace(/\s+/g, '-').toLowerCase();
			return Object.keys(colorValue).map((shade) => `bg-untld-${formattedColorKey}-${shade}`);
		});
	});
};

const allClassNames = generateClassNames(colors);

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {}
		}
	},
	// For now we need this safelist, we won't need this in every project described in our docs. We only need this for the docs page
	safelist: [...allClassNames],
	plugins: [untitledPlugin]
};
