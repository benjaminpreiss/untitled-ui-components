import { defineTokens } from '@pandacss/dev';

const baseShadows = {
	untld_xs: { value: [`0px 1px 2px 0px rgba(16, 24, 40, 0.05)`] },
	untld_sm: {
		value: [`0px 1px 2px 0px rgba(16, 24, 40, 0.06)`, ` 0px 1px 3px 0px rgba(16, 24, 40, 0.10)`]
	},
	untld_md: {
		value: [`0px 2px 4px -2px rgba(16, 24, 40, 0.06)`, ` 0px 4px 8px -2px rgba(16, 24, 40, 0.10)`]
	},
	untld_lg: {
		value: [`0px 4px 6px -2px rgba(16, 24, 40, 0.03)`, ` 0px 12px 16px -4px rgba(16, 24, 40, 0.08)`]
	},
	untld_xl: {
		value: [`0px 8px 8px -4px rgba(16, 24, 40, 0.03)`, ` 0px 20px 24px -4px rgba(16, 24, 40, 0.08)`]
	},
	untld_2xl: { value: [`0px 24px 48px -12px rgba(16, 24, 40, 0.18)`] },
	untld_3xl: { value: [`0px 32px 64px -12px rgba(16, 24, 40, 0.14)`] }
};

export default defineTokens({
	shadows: {
		...baseShadows,
		untld_xs_focused_4px_primary_100: {
			value: [...baseShadows.untld_xs.value, `0 0 0 4px {colors.untld_brand.100}`]
		},
		untld_xs_focused_4px_secondary_gray_100: {
			value: [...baseShadows.untld_xs.value, `0 0 0 4px {colors.untld_gray.100}`]
		},
		untld_xs_focused_4px_error_100: {
			value: [...baseShadows.untld_xs.value, `0 0 0 4px {colors.untld_error.100}`]
		},
		untld_sm_focused_4px_primary_100: {
			value: [...baseShadows.untld_sm.value, `0 0 0 4px {colors.untld_brand.100}`]
		},
		untld_sm_focused_4px_gray_100: {
			value: [...baseShadows.untld_sm.value, `0 0 0 4px {colors.untld_gray.100}`]
		}
	}
});
