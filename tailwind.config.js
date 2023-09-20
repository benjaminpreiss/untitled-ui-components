import untitledPlugin from './src/lib/tailwindPlugin';
import { colors } from './src/lib/tailwindPlugin';

/** @type {import('tailwindcss').Config} */

const generateClassNames = colors => {
    return Object.values(colors).flatMap(mainValue => {
        return Object.entries(mainValue).flatMap(([colorKey, colorValue]) => {
            const formattedColorKey = colorKey.replace(/\s+/g, '-').toLowerCase();
                return Object.keys(colorValue).map(shade => `bg-untld-${formattedColorKey}-${shade}`);
        });
    });
};

const allClassNames = generateClassNames(colors);

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'colors': '10rem repeat(8, minmax(0, 1fr)) 16rem repeat(3, minmax(0, 1fr))'
			},
				animation: {
					fadeIn: 'fadeIn 1.5s forwards',
				},
				keyframes: {
					fadeIn: {
						'0%': {
							opacity: 0
						},
						'100%': {
							opacity: 1
						}
					}
				},
			  },
			colors: {
			
<<<<<<< HEAD
=======
			}
>>>>>>> 9dde825e5d091ab6442e4a449ceb9739e991c9e3
		}
	},
	// For now we need this safelist, we won't need this in every project described in our docs. We only need this for the docs page
	safelist:[...allClassNames],
	plugins: [untitledPlugin],
};
