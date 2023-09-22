import untitledPlugin from './src/lib/tailwindPlugin';
import { colors } from './src/lib/tailwindPlugin';

/** @type {import('tailwindcss').Config} */

// THIS IS NOT A NECESSARY CONFIGURATION FOR THE ENDUSER
const generateClassNames = (colors) => {
	return Object.values(colors).flatMap((mainValue) => {
		return Object.entries(mainValue).flatMap(([colorKey, colorValue]) => {
			const formattedColorKey = colorKey.replace(/\s+/g, '-').toLowerCase();
			// Check if colorValue is a string (i.e., a base color)
			if (typeof colorValue === 'string') {
				return `bg-untld-${formattedColorKey}`;
			}
			// For colors with shades
			return Object.keys(colorValue).map((shade) => `bg-untld-${formattedColorKey}-${shade}`);
		});
	});
};

// THIS IS NOT A NECESSARY CONFIGURATION FOR THE ENDUSER
const allClassNames = generateClassNames(colors);

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// THIS IS NOT A NECESSARY CONFIGURATION FOR THE ENDUSER
			gridTemplateColumns: {
				colors: '10rem repeat(8, minmax(0, 1fr)) 16rem repeat(3, minmax(0, 1fr))'
			},
			// THIS IS NOT A NECESSARY CONFIGURATION FOR THE ENDUSER
			animation: {
				fadeIn: 'fadeIn 1.5s forwards'
			},
			// THIS IS NOT A NECESSARY CONFIGURATION FOR THE ENDUSER
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: 0
					},
					'100%': {
						opacity: 1
					}
				}
			}
			// Overwrite default colors from untld by specifying them here
			/* colors: {
				"untld-primary-50": <hex-code-here>
			} */
		}
	},
	// For now we need this safelist, we won't need this in every project described in our docs. We only need this for the docs page
	// THIS IS NOT A NECESSARY CONFIGURATION FOR THE ENDUSER
	safelist: [...allClassNames],
	plugins: [untitledPlugin]
};
