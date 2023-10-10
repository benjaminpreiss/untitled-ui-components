<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { size, color } from './types.js';
	import { getContext, setContext } from 'svelte';
	interface $$Props extends HTMLButtonAttributes {
		size: size;
		outline: boolean;
		color?: color;
		onClick?: (() => void) | undefined;
	}
	export let size: size;
	export let outline: boolean = false;
	export let color: color = 'primary';
	export let onClick: (() => void) | undefined = undefined;

	setContext('color', color);
	setContext('outline', outline);
	setContext('size', size);

	const styleColorsButtons = {
		outline: {
			gray: {
				coloring: 'text-untld-gray-600  ring-untld-gray-700'
			},
			primary: {
				coloring: ' text-untld-primary-600  ring-untld-primary-700   '
			},
			error: {
				coloring: 'text-untld-error-600  ring-untld-error-700   '
			},
			warning: {
				coloring: ' text-untld-warning-600  ring-untld-warning-700   '
			},
			success: {
				coloring: ' text-untld-success-600  ring-untld-success-700   '
			},
			'gray-blue': {
				coloring: ' text-untld-gray-blue-600  ring-untld-gray-blue-700      '
			},
			'blue-light': {
				coloring: ' text-untld-blue-light-600  ring-untld-blue-light-700    '
			},
			blue: {
				coloring: ' text-untld-blue-600 ring-untld-blue-700    '
			},
			indigo: {
				coloring: ' text-untld-indigo-600 ring-untld-indigo-700    '
			},
			purple: {
				coloring: ' text-untld-purple-600 ring-untld-purple-700    '
			},
			pink: {
				coloring: ' text-untld-pink-600 ring-untld-pink-700    '
			},
			rosé: {
				coloring: ' text-untld-rosé-600 ring-untld-rosé-700    '
			},
			orange: {
				coloring: ' text-untld-orange-600 ring-untld-orange-700    '
			}
		},
		noOutline: {
			gray: {
				coloring: 'bg-untld-gray-100 text-untld-gray-700 ring-untld-gray-100 '
			},
			primary: {
				coloring: 'bg-untld-primary-50 text-untld-primary-700 ring-untld-primary-50     '
			},
			error: {
				coloring: 'bg-untld-error-50 text-untld-error-700 ring-untld-error-50    '
			},
			warning: {
				coloring: 'bg-untld-warning-50 text-untld-warning-700 ring-untld-warning-50 '
			},
			success: {
				coloring: 'bg-untld-success-50 text-untld-success-700  ring-untld-success-50   '
			},
			'gray-blue': {
				coloring: 'bg-untld-gray-blue-50 text-untld-gray-blue-600  ring-untld-gray-blue-50      '
			},
			'blue-light': {
				coloring: 'bg-untld-blue-light-50 text-untld-blue-light-600  ring-untld-blue-light-50    '
			},
			blue: {
				coloring: 'bg-untld-blue-50 text-untld-blue-700 ring-untld-blue-50   '
			},
			indigo: {
				coloring: 'bg-untld-indigo-50 text-untld-indigo-700 ring-untld-indigo-50  '
			},
			purple: {
				coloring: 'bg-untld-purple-50 text-untld-purple-700 ring-untld-purple-50   '
			},
			pink: {
				coloring: 'bg-untld-pink-50 text-untld-pink-700 ring-untld-pink-50  '
			},
			rosé: {
				coloring: 'bg-untld-rosé-50 text-untld-rosé-700 ring-untld-rosé-50 my-0    '
			},
			orange: {
				coloring: 'bg-untld-orange-50 text-untld-orange-700 ring-untld-orange-50   '
			}
		}
	};

	const stylePaddings = {
		sm: {
			padding: 'px-[0.5rem] py-[0.125rem] gap-1.5 '
		},
		md: {
			padding: ' px-[0.625rem] py-[0.125rem] gap-2'
		},
		lg: {
			padding: 'px-[0.75rem] py-[0.25rem] gap-2'
		}
	};
</script>

<button
	{...$$props}
	on:click={onClick}
	class="{$$props.class}  
    {styleColorsButtons[outline ? 'outline' : 'noOutline'][color].coloring}
    {stylePaddings[size].padding}
    {onClick
		? 'pointer-events-auto'
		: 'pointer-events-auto cursor-default'} flex justify-center items-center outline-none ring-[0.09375rem] rounded-full disabled:pointer-events-none focus-visible:outline-none focus:outline-none"
>
	<slot name="icon-left" />
	<slot />
	<slot name="icon-right" />
</button>
