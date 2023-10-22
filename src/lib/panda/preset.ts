import { definePreset } from '@pandacss/dev';
import colors from './tokens/colors.js';
/* import shadows from './tokens/shadows.js';*/
import { textStyles } from './textStyles/textStyles.js'; /* 
import { button_buttonWrapper } from '$lib/components/Button/styles.js'; */

export default definePreset({
	theme: {
		extend: {
			tokens: {
				fonts: {
					body: { value: 'Inter, sans-serif' }
				},
				...colors
				/* ...shadows */
			} /* 
			recipes: { button_buttonWrapper },*/,
			textStyles
		}
	}
});
