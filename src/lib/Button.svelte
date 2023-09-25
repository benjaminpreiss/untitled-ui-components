<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import dotIcon from '$lib/assets/icons/_Dot.svg?url';

	type size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	type hierarchy =
		| 'primary'
		| 'secondary-gray'
		| 'secondary-color'
		| 'tertiary-gray'
		| 'tertiary-color'
		| 'link-gray'
		| 'link-color';
	type icon =
		| { type: 'dot' }
		| { type: 'icon-only'; leading: string }
		| { type: 'icon'; leading?: string; trailing?: string };

	interface $$Props extends HTMLButtonAttributes {
		size: size;
		hierarchy?: hierarchy;
		destructive?: boolean;
		icon: icon;
	}

	export let size: size;
	export let hierarchy: hierarchy = 'primary';
	export let destructive: boolean = false;
	export let icon: icon;

	/* TODO: Check why focus in nondestructive secodary-gray does not work */
	const styleColorsButtons = {
		nonDestructive: {
			primary: {
				coloring:
					'bg-untld-primary-600 text-untld-white border-untld-primary-600 hover:bg-untld-primary-700 disabled:bg-untld-primary-200 focus:shadow-untld-xs-focused-4px-primary-100 focus-visible:shadow-untld-xs-focused-4px-primary-100'
			},
			'secondary-gray': {
				coloring:
					'bg-untld-white text-untld-gray-700 border-untld-gray-300 hover:bg-untld-gray-50 hover:text-untld-gray-800 disabled:text-untld-gray-300 focus:untld-xs-focused-4px-secondary-gray-100 focus-visible:untld-xs-focused-4px-secondary-gray-100'
			},
			'secondary-color': {
				coloring:
					'bg-untld-primary-50 text-untld-primary-700 border-untld-primary-50 hover:bg-untld-primary-100 hover:text-untld-primary-800 disabled:bg-untld-primary-25 disabled:text-untld-primary-300 focus:shadow-untld-xs-focused-4px-primary-100 focus-visible:shadow-untld-xs-focused-4px-primary-100'
			},
			'tertiary-gray': {
				coloring:
					'text-untld-gray-600 hover:bg-untld-gray-50 hover:text-untld-gray-700 disabled:text-untld-gray-300'
			},
			'tertiary-color': {
				coloring:
					'text-untld-primary-700 hover:bg-untld-primary-50 hover:text-untld-primary-800 disabled:text-untld-gray-300'
			},
			'link-gray': {
				coloring: 'text-untld-gray-600 hover:text-untld-gray-700 disabled:text-untld-gray-300'
			},
			'link-color': {
				coloring: 'text-untld-primary-700 hover:text-untld-primary-800 disabled:text-untld-gray-300'
			}
		},
		destructive: {
			primary: {
				coloring:
					'bg-untld-error-600 text-untld-white border-untld-error-600 hover:bg-untld-error-700 disabled:bg-untld-error-200 focus:shadow-untld-xs-focused-4px-error-100 focus-visible:shadow-untld-xs-focused-4px-error-100'
			},
			'secondary-gray': {
				coloring:
					'bg-untld-white text-untld-error-700 border-untld-error-300 hover:bg-untld-error-50 hover:text-untld-error-800 disabled:text-untld-error-300 focus:shadow-untld-xs-focused-4px-error-100 focus-visible:shadow-untld-xs-focused-4px-error-100'
			},
			'secondary-color': {
				coloring:
					'bg-untld-error-50 text-untld-error-700 border-untld-error-50 hover:bg-untld-error-100 hover:text-untld-error-800 disabled:bg-untld-error-25 disabled:text-untld-error-300 focus:shadow-untld-xs-focused-4px-error-100 focus-visible:shadow-untld-xs-focused-4px-error-100'
			},
			'tertiary-gray': {
				coloring:
					'text-untld-error-600 hover:bg-untld-error-50 hover:text-untld-error-700 disabled:text-untld-error-300'
			},
			'tertiary-color': {
				coloring:
					'text-untld-error-700 hover:bg-untld-error-50 hover:text-untld-error-800 disabled:text-untld-error-300'
			},
			'link-gray': {
				coloring: 'text-untld-error-700 hover:text-untld-error-800 disabled:text-untld-error-300'
			},
			'link-color': {
				coloring: 'text-untld-error-700 hover:text-untld-error-800 disabled:text-untld-error-300'
			}
		}
	};

	const styleColorsIcons = {
		nonDestructive: {
			primary: {
				coloring: 'bg-untld-white'
			},
			'secondary-gray': {
				coloring: 'bg-untld-gray-700 hover:bg-untld-gray-800 disabled:bg-untld-gray-300'
			},
			'secondary-color': {
				coloring: 'bg-untld-primary-700 hover:bg-untld-primary-800 disabled:bg-untld-primary-300'
			},
			'tertiary-gray': {
				coloring: 'bg-untld-gray-600 hover:bg-untld-gray-700 disabled:bg-untld-gray-300'
			},
			'tertiary-color': {
				coloring: 'bg-untld-primary-700 hover:bg-untld-primary-800 disabled:bg-untld-gray-300'
			},
			'link-gray': {
				coloring: 'bg-untld-gray-600 hover:bg-untld-gray-700 disabled:bg-untld-gray-300'
			},
			'link-color': {
				coloring: 'bg-untld-primary-700 hover:bg-untld-primary-800 disabled:bg-untld-gray-300'
			}
		},
		destructive: {
			primary: {
				coloring: 'bg-untld-white'
			},
			'secondary-gray': {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			},
			'secondary-color': {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			},
			'tertiary-gray': {
				coloring: 'bg-untld-error-600 hover:bg-untld-error-700 disabled:bg-untld-error-300'
			},
			'tertiary-color': {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			},
			'link-gray': {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			},
			'link-color': {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			}
		}
	};

	const stylePaddings = {
		icon: {
			sm: {
				padding: 'px-[0.875rem] py-[0.5rem]'
			},
			md: {
				padding: 'px-[1rem] py-[0.625rem]'
			},
			lg: {
				padding: 'px-[1.125rem] py-[0.625rem]'
			},
			xl: {
				padding: 'px-[1.25rem] py-[0.75rem]'
			},
			'2xl': {
				padding: 'px-[1.75rem] py-[1rem]'
			}
		},
		'icon-only': {
			sm: {
				padding: 'p-[0.5rem]'
			},
			md: {
				padding: 'p-[0.625rem]'
			},
			lg: {
				padding: 'p-[0.75rem]'
			},
			xl: {
				padding: 'p-[0.875rem]'
			},
			'2xl': {
				padding: 'p-[1rem]'
			}
		},
		dot: {
			sm: {
				padding: 'px-[0.875rem] py-[0.5rem]'
			},
			md: {
				padding: 'px-[1rem] py-[0.625rem]'
			},
			lg: {
				padding: 'px-[1.125rem] py-[0.625rem]'
			},
			xl: {
				padding: 'px-[1.25rem] py-[0.75rem]'
			},
			'2xl': {
				padding: 'px-[1.75rem] py-[1rem]'
			}
		}
	};

	const styleSizes = {
		sm: {
			text: 'untld-text-sm'
		},
		md: {
			text: 'untld-text-sm'
		},
		lg: {
			text: 'untld-text-md'
		},
		xl: {
			text: 'untld-text-md'
		},
		'2xl': {
			text: 'untld-text-lg'
		}
	};
	// TODO Johanna disable blue ring on keyboard tab focus-within
</script>

<button
	style="--left-icon-url:url('{icon.type === 'dot'
		? dotIcon
		: icon.leading ?? ''}'); --right-icon-url:url('{icon.type === 'icon' ? icon.trailing : ''}') "
	class="
	{hierarchy === 'primary' || hierarchy === 'secondary-color' || hierarchy === 'secondary-gray'
		? 'shadow-untld-xs'
		: ''}
    {styleColorsButtons[destructive ? 'destructive' : 'nonDestructive'][hierarchy].coloring}
    {stylePaddings[icon.type][size].padding}
    border rounded-[0.5rem] border-solid
    inline-flex justify-center items-center gap-[0.5rem] disabled:pointer-events-none"
	{...$$props}
	on:click
>
	<!-- TODO: add the correct urls for the icons (probably dynamic based on chosen icon) and dot (static) ?done? -->
	<div
		class="
		[mask-position:center]
		[mask-size:contain]
		[mask-image:var(--left-icon-url)]
		{styleColorsIcons[destructive ? 'destructive' : 'nonDestructive'][hierarchy].coloring}
        {icon.type === 'dot'
			? 'h-[0.625rem] w-[0.625rem]'
			: icon.leading
			? size === '2xl'
				? 'h-[1.5rem] w-[1.5rem]'
				: 'h-[1.25rem] w-[1.25rem]'
			: 'hidden'}"
	/>
	<span
		class="
            untld-text-regular
            {icon.type === 'icon-only' ? 'hidden' : ''}
            {styleSizes[size].text}
        "
	>
		<slot />
	</span>
	<div
		class="
		[mask-position:center]
		[mask-size:contain]
		[mask-image:var(--right-icon-url)]
		{styleColorsIcons[destructive ? 'destructive' : 'nonDestructive'][hierarchy].coloring}
        {icon.type === 'icon'
			? icon.trailing
				? size === '2xl'
					? 'h-[1.5rem] w-[1.5rem]'
					: 'h-[1.25rem] w-[1.25rem]'
				: 'hidden'
			: 'hidden'}"
	/>
</button>
