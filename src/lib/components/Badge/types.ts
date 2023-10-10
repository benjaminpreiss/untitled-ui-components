export type size = 'sm' | 'md' | 'lg';

export type color =
	| 'gray'
	| 'primary'
	| 'error'
	| 'warning'
	| 'success'
	| 'gray-blue'
	| 'blue-light'
	| 'blue'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'rosé'
	| 'orange';

export type badgeType = 'Pill color' | 'Pill outline' | 'Badge color' | 'Badge modern';

export type icon =
	| { type: 'dot' }
	| { type: 'image'; leading: string }
	// leading optional since we can provide a standard close icon
	| { type: 'x-close'; trailing?: string; onClick: () => void }
	| { type: 'icon'; leading?: string; trailing?: string }
	| { type: 'icon-only'; leading: string };

export type onClick = (() => void) | undefined;
