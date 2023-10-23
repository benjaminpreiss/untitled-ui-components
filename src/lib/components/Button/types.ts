export type size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type hierarchy =
	| 'primary'
	| 'secondaryGray'
	| 'secondaryColor'
	| 'tertiaryGray'
	| 'tertiaryColor'
	| 'linkGray'
	| 'linkColor';
type iconOnly = { type: 'icon-only'; leading: string };
type iconRegular = { type: 'dot' } | { type: 'icon'; leading?: string; trailing?: string };
export type icon<H extends hierarchy> = H extends 'link-gray' | 'link-color'
	? iconRegular
	: iconOnly | iconRegular;
