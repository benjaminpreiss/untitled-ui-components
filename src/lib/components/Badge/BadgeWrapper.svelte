<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { size, color, icon } from './types.js';
	import { getContext, setContext } from 'svelte';
	interface $$Props extends HTMLButtonAttributes {
		size: size;
		outline: boolean;
		color?: color;
		clickable?: boolean;
	}
	export let size: size;
	export let outline: boolean = false;
	export let color: color = 'primary';

	export let clickable: boolean = false;

	// TODO: Remove icon here
	const icon: icon = getContext('icon');
	setContext('color', color);
	setContext('outline', outline);
	setContext('size', size);

	// TODO: Remove trailing
	const trailing = !!(icon && ((icon.type === 'icon' && icon.trailing) || icon.type === 'x-close'));

	const styleColorsButtons = {
		outline: {
			gray: {
				coloring: 'text-untld-gray-600  border-untld-gray-700'
			},
			primary: {
				coloring: ' text-untld-primary-600  border-untld-primary-700   '
			},
			error: {
				coloring: 'text-untld-error-600  border-untld-error-700   '
			},
			warning: {
				coloring: ' text-untld-warning-600  border-untld-warning-700   '
			},
			success: {
				coloring: ' text-untld-success-600  border-untld-success-700   '
			},
			'gray-blue': {
				coloring: ' text-untld-gray-blue-600  border-untld-gray-blue-700      '
			},
			'blue-light': {
				coloring: ' text-untld-blue-light-600  border-untld-blue-light-700    '
			},
			blue: {
				coloring: ' text-untld-blue-600 border-untld-blue-700    '
			},
			indigo: {
				coloring: ' text-untld-indigo-600 border-untld-indigo-700    '
			},
			purple: {
				coloring: ' text-untld-purple-600 border-untld-purple-700    '
			},
			pink: {
				coloring: ' text-untld-pink-600 border-untld-pink-700    '
			},
			rosé: {
				coloring: ' text-untld-rosé-600 border-untld-rosé-700    '
			},
			orange: {
				coloring: ' text-untld-orange-600 border-untld-orange-700    '
			}
		},
		noOutline: {
			gray: {
				coloring: 'bg-untld-gray-100 text-untld-gray-700 border-untld-gray-100 '
			},
			primary: {
				coloring: 'bg-untld-primary-50 text-untld-primary-700 border-untld-primary-50     '
			},
			error: {
				coloring: 'bg-untld-error-50 text-untld-error-700 border-untld-error-50    '
			},
			warning: {
				coloring: 'bg-untld-warning-50 text-untld-warning-700 border-untld-warning-50 '
			},
			success: {
				coloring: 'bg-untld-success-50 text-untld-success-700  border-untld-success-50   '
			},
			'gray-blue': {
				coloring: 'bg-untld-gray-blue-50 text-untld-gray-blue-600  border-untld-gray-blue-50      '
			},
			'blue-light': {
				coloring: 'bg-untld-blue-light-50 text-untld-blue-light-600  border-untld-blue-light-50    '
			},
			blue: {
				coloring: 'bg-untld-blue-50 text-untld-blue-700 border-untld-blue-50   '
			},
			indigo: {
				coloring: 'bg-untld-indigo-50 text-untld-indigo-700 border-untld-indigo-50  '
			},
			purple: {
				coloring: 'bg-untld-purple-50 text-untld-purple-700 border-untld-purple-50   '
			},
			pink: {
				coloring: 'bg-untld-pink-50 text-untld-pink-700 border-untld-pink-50  '
			},
			rosé: {
				coloring: 'bg-untld-rosé-50 text-untld-rosé-700 border-untld-rosé-50 my-0    '
			},
			orange: {
				coloring: 'bg-untld-orange-50 text-untld-orange-700 border-untld-orange-50   '
			}
		}
	};

	// TODO: Unify paddings here so that they don't depend on icon

	const stylePaddings = {
		sm: {
			padding: `${
				icon && (icon.type === 'avatar' || icon.type === 'country')
					? 'gap-1.5 pl-[0.094rem] pr-[0.406rem] py-[0.031rem] '
					: icon && icon.type === 'icon-only'
					? 'p-[0.156rem] gap-0'
					: icon && icon.type === 'dot'
					? 'pl-[0.281rem] py-[0.031rem] pr-[0.406rem] gap-1'
					: trailing
					? 'pr-[0.281rem] py-[0.031rem] pl-[0.406rem] gap-1'
					: 'pl-[0.281rem] py-[0.031rem] pr-[0.406rem] gap-1'
			} `
		},
		md: {
			padding: ` ${
				icon && (icon.type === 'avatar' || icon.type === 'country')
					? ' gap-1.5 pl-[0.156rem] pr-[0.531rem] py-[0.031rem] '
					: icon && icon.type === 'icon-only'
					? 'p-[0.281rem] gap-0'
					: icon && icon.type === 'dot'
					? 'pl-[0.406rem] py-[0.031rem] pr-[0.531rem] gap-1.5'
					: trailing
					? 'pr-[0.406rem] py-[0.031rem] pl-[0.531rem] gap-1'
					: 'pl-[0.406rem] py-[0.031rem] pr-[0.531rem] gap-1'
			} `
		},
		lg: {
			padding: `${
				icon && (icon.type === 'avatar' || icon.type === 'country')
					? ' gap-1.5 pl-[0.281rem] pr-[0.656rem] py-[0.156rem] '
					: icon && icon.type === 'icon-only'
					? 'p-[0.406rem] gap-0'
					: icon && icon.type === 'dot'
					? 'pl-[0.531rem] py-[0.156rem] pr-[0.656rem] gap-1.5'
					: trailing
					? 'pr-[0.531rem] py-[0.156rem] pl-[0.656rem] gap-1'
					: 'pl-[0.531rem] py-[0.156rem] pr-[0.656rem] gap-1'
			} `
		}
	};
</script>

<!-- TODO Replace border with an inset ring! -->
<!-- TODO check if the onClick hasOwnProperty works -->
<button
	{...$$props}
	class="{$$props.class}  
    {styleColorsButtons[outline ? 'outline' : 'noOutline'][color].coloring}
    {stylePaddings[size].padding}
    {clickable
		? 'pointer-events-auto'
		: 'pointer-events-none'} flex justify-center items-center outline-none border-[0.094rem] rounded-full disabled:pointer-events-none focus-visible:outline-none focus:outline-none"
	on:click
>
	<slot name="icon-left" />
	<slot />
	<slot name="icon-right" />
</button>
