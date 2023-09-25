export type size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type hierarchy =
	| 'primary'
	| 'secondary-gray'
	| 'secondary-color'
	| 'tertiary-gray'
	| 'tertiary-color'
	| 'link-gray'
	| 'link-color';
export type icon =
	| { type: 'dot' }
	| { type: 'icon-only'; leading: string }
	| { type: 'icon'; leading?: string; trailing?: string };
