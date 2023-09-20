import plugin from 'tailwindcss/plugin.js';
import defaultTheme from 'tailwindcss/defaultTheme.js';

export default plugin(
	function ({ addBase, matchUtilities, theme }) {
		addBase({
			'@font-face': {
				'font-family': 'Inter',
				src: "url('assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf')",
				'font-weight': '1 999'
			}
		});
		matchUtilities(
			{
				extend: (value) => ({
					tabSize: value
				})
			},
			{ values: theme('tabSize') }
		);
	},
	{
		theme: {
			extend: {
				colors: {
					'untitled-primary': {
						50: '#fdf8f6',
						100: '#f2e8e5',
						200: '#eaddd7',
						300: '#e0cec7',
						400: '#d2bab0',
						500: '#bfa094',
						600: '#a18072',
						700: '#977669',
						800: '#846358',
						900: '#43302b'
					}
				},
				fontFamily: {
					sans: ['Inter', ...defaultTheme.fontFamily.sans]
				}
			}
		}
	}
);
