import untitledPlugin from './src/lib/tailwind/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// THIS IS NOT A NECESSARY CONFIGURATION FOR THE ENDUSER
			animation: {
				fadeIn: 'fadeIn 1.5s forwards',
				fadeInFast: 'fadeIn 0.5s forwards',
				fadeInSlow: 'fadeIn 2s forwards',
				fadeInFromTop: 'fadeInFromTop 0.5s forwards'
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
				},
				fadeInFromTop: {
					'0%': {
						opacity: 0,
						transform: 'translateY(-200px)'
					},
					'50%': {
						opacity: 0.75,
						transform: 'translateX(0)'
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0)'
					}
				}
			}
			// Overwrite default colors from untld by specifying them here
			/* colors: {
				"untld-brand-50": <hex-code-here>
			} */
		}
	},
	plugins: [untitledPlugin]
};
