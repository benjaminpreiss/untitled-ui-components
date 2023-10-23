import { defineRecipe } from '@pandacss/dev';

export const button_buttonWrapper = defineRecipe({
	className: 'buttonWrapper',
	description: 'The styles for the ButtonWrapper component',
	base: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '0.5rem',
		_disabled: {
			pointerEvents: 'none'
		},
		_focusVisible: {
			outline: 'transparent'
		}
	},
	variants: {
		destructive: {
			true: {},
			false: {}
		},
		hierarchy: {
			primary: {
				boxShadow: 'untld_xs'
			},
			secondaryGray: {
				boxShadow: 'untld_xs'
			},
			secondaryColor: {
				boxShadow: 'untld_xs'
			},
			tertiaryGray: {},
			tertiaryColor: {},
			linkGray: {},
			linkColor: {}
			/* TODO */
		},
		size: {
			sm: { px: '0.875rem', py: '0.5rem' },
			md: { px: '1rem', py: '0.625rem' },
			lg: { px: '1.125rem', py: '0.625rem' },
			xl: { px: '1.25rem', py: '0.75rem' },
			'2xl': { px: '1.75rem', py: '1rem' }
		}
	},
	compoundVariants: [
		{
			destructive: false,
			hierarchy: 'primary',
			css: {
				bg: { base: 'untld_brand.600', _hover: 'untld_brand.700', _disabled: 'untld_brand.200' },
				color: 'untld_white',
				rounded: '0.5rem',
				borderStyle: 'solid',
				borderColor: 'untld_brand.600',
				boxShadow: {
					_focus: 'untld_xs_focused_4px_primary_100',
					_focusVisible: 'untld_xs_focused_4px_primary_100'
				}
			}
		},
		{
			destructive: false,
			hierarchy: 'secondaryGray',
			css: {
				bg: { base: 'untld_white', _hover: 'untld_gray.50' },
				color: { base: 'untld_gray.700', _hover: 'untld_gray.800', _disabled: 'untld_gray.300' },
				rounded: '0.5rem',
				borderStyle: 'solid',
				borderColor: 'untld_gray.300',
				boxShadow: {
					_focus: 'untld_xs_focused_4px_secondary_gray_100',
					_focusVisible: 'untld_xs_focused_4px_secondary_gray_100'
				}
			}
		},
		{
			destructive: false,
			hierarchy: 'secondaryColor',
			css: {
				bg: { base: 'untld_brand.50', _hover: 'untld_brand.100', _disabled: 'untld_brand.25' },
				color: { base: 'untld_brand.700', _hover: 'untld_brand.800', _disabled: 'untld_brand.300' },
				rounded: '0.5rem',
				borderStyle: 'solid',
				borderColor: 'untld_brand.50',
				boxShadow: {
					_focus: 'untld_xs_focused_4px_primary_100',
					_focusVisible: 'untld_xs_focused_4px_primary_100'
				}
			}
		},
		{
			destructive: false,
			hierarchy: 'tertiaryGray',
			css: {
				bg: { _hover: 'untld_gray.50' },
				color: { base: 'untld_gray.600', _hover: 'untld_gray.700', _disabled: 'untld_gray.300' },
				rounded: '0.5rem'
			}
		},
		{
			destructive: false,
			hierarchy: 'tertiaryColor',
			css: {
				bg: { _hover: 'untld_brand.50' },
				color: { base: 'untld_brand.700', _hover: 'untld_brand.800', _disabled: 'untld_gray.300' },
				rounded: '0.5rem'
			}
		},
		{
			destructive: false,
			hierarchy: 'linkGray',
			css: {
				color: { base: 'untld_gray.600', _hover: 'untld_gray.700', _disabled: 'untld_gray.300' }
			}
		},
		{
			destructive: false,
			hierarchy: 'linkColor',
			css: {
				color: { base: 'untld_brand.700', _hover: 'untld_brand.800', _disabled: 'untld_gray.300' }
			}
		},
		/* Start here */
		{
			destructive: true,
			hierarchy: 'primary',
			css: {
				bg: { base: 'untld_error.600', _hover: 'untld_error.700', _disabled: 'untld_error.200' },
				color: 'untld_white',
				rounded: '0.5rem',
				borderStyle: 'solid',
				borderColor: 'untld_error.600',
				boxShadow: {
					_focus: 'untld_xs_focused_4px_error_100',
					_focusVisible: 'untld_xs_focused_4px_error_100'
				}
			}
		},
		{
			destructive: true,
			hierarchy: 'secondaryGray',
			css: {
				bg: { base: 'untld_white', _hover: 'untld_error.50' },
				color: { base: 'untld_error.700', _hover: 'untld_error.800', _disabled: 'untld_error.300' },
				rounded: '0.5rem',
				borderStyle: 'solid',
				borderColor: 'untld_error.300',
				boxShadow: {
					_focus: 'untld_xs_focused_4px_error_100',
					_focusVisible: 'untld_xs_focused_4px_error_100'
				}
			}
		},
		{
			destructive: true,
			hierarchy: 'secondaryColor',
			css: {
				bg: { base: 'untld_error.50', _hover: 'untld_error.100', _disabled: 'untld_error.25' },
				color: { base: 'untld_error.700', _hover: 'untld_error.800', _disabled: 'untld_error.300' },
				rounded: '0.5rem',
				borderStyle: 'solid',
				borderColor: 'untld_error.50',
				boxShadow: {
					_focus: 'untld_xs_focused_4px_error_100',
					_focusVisible: 'untld_xs_focused_4px_error_100'
				}
			}
		},
		{
			destructive: true,
			hierarchy: 'tertiaryGray',
			css: {
				bg: { _hover: 'untld_error.50' },
				color: { base: 'untld_error.600', _hover: 'untld_error.700', _disabled: 'untld_error.300' },
				rounded: '0.5rem'
			}
		},
		{
			destructive: true,
			hierarchy: 'tertiaryColor',
			css: {
				bg: { _hover: 'untld_error.50' },
				color: { base: 'untld_error.700', _hover: 'untld_error.800', _disabled: 'untld_error.300' },
				rounded: '0.5rem'
			}
		},
		{
			destructive: true,
			hierarchy: 'linkGray',
			css: {
				color: { base: 'untld_error.700', _hover: 'untld_error.800', _disabled: 'untld_error.300' }
			}
		},
		{
			destructive: true,
			hierarchy: 'linkColor',
			css: {
				color: { base: 'untld_error.700', _hover: 'untld_error.800', _disabled: 'untld_error.300' }
			}
		}
	]
});
