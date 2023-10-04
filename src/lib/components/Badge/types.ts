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

export type icon =
	| { type: 'dot' }
	| { type: 'country'; leading?: string }
	// leading optional since we can provide a standard avatar icon
	| { type: 'avatar'; leading?: string }
	// leading optional since we can provide a standard close icon
	| { type: 'x-close'; trailing?: string }
	// leading optional since we can provide a standard country icon
	| { type: 'icon'; leading?: string; trailing?: string }
	| { type: 'icon-only'; leading: string };

export type onClick = (() => void) | undefined;
