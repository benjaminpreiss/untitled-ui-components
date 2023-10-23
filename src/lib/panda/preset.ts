import { definePreset } from '@pandacss/dev';
import colors from './tokens/colors.js';
import shadows from './tokens/shadows.js';
import { textStyles } from './textStyles/textStyles.js';
import { button_buttonWrapper } from '../components/Button/styles.js';

export default definePreset({
	theme: {
		extend: {
			tokens: {
				...colors,
				...shadows
			},
			recipes: { button_buttonWrapper },
			textStyles
		}
	},
	globalCss: {
		'@font-face': {
			'font-family': 'Inter',
			src: "url('assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf')",
			'font-weight': '1 999'
		},
		':root': {
			'--global-font-body': 'Inter, sans-serif'
		}
	}
});
