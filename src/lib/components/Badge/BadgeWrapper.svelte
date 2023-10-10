<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { size, color, badgeType } from './types.js';
	import { setContext } from 'svelte';
	interface $$Props extends HTMLButtonAttributes {
		size: size;
		badgeType: badgeType;
		color?: color;
		onClick?: (() => void) | undefined;
	}
	export let size: size;
	export let badgeType: badgeType = 'Pill color';
	export let color: color = 'primary';
	export let onClick: (() => void) | undefined = undefined;

	setContext('color', color);
	setContext('badgeType', badgeType);
	setContext('size', size);

	const styleColorsButtons = {
		['Pill color']: {
			gray: {
				coloring:
					'bg-untld-gray-100 text-untld-gray-700 ring-untld-gray-200 ring-[0.063rem] rounded-full'
			},
			primary: {
				coloring:
					'bg-untld-primary-50 text-untld-primary-700 ring-untld-primary-200 ring-[0.063rem] rounded-full     '
			},
			error: {
				coloring:
					'bg-untld-error-50 text-untld-error-700 ring-untld-error-200 ring-[0.063rem] rounded-full    '
			},
			warning: {
				coloring:
					'bg-untld-warning-50 text-untld-warning-700 ring-untld-warning-200 ring-[0.063rem] rounded-full '
			},
			success: {
				coloring:
					'bg-untld-success-50 text-untld-success-700  ring-untld-success-200 ring-[0.063rem] rounded-full   '
			},
			'gray-blue': {
				coloring:
					'bg-untld-gray-blue-50 text-untld-gray-blue-600  ring-untld-gray-blue-200 ring-[0.063rem] rounded-full      '
			},
			'blue-light': {
				coloring:
					'bg-untld-blue-light-50 text-untld-blue-light-600  ring-untld-blue-light-200 ring-[0.063rem] rounded-full    '
			},
			blue: {
				coloring:
					'bg-untld-blue-50 text-untld-blue-700 ring-untld-blue-200 ring-[0.063rem] rounded-full   '
			},
			indigo: {
				coloring:
					'bg-untld-indigo-50 text-untld-indigo-700 ring-untld-indigo-200 ring-[0.063rem] rounded-full  '
			},
			purple: {
				coloring:
					'bg-untld-purple-50 text-untld-purple-700 ring-untld-purple-200 ring-[0.063rem] rounded-full   '
			},
			pink: {
				coloring:
					'bg-untld-pink-50 text-untld-pink-700 ring-untld-pink-200 ring-[0.063rem] rounded-full  '
			},
			rosé: {
				coloring:
					'bg-untld-rosé-50 text-untld-rosé-700 ring-untld-rosé-200 ring-[0.063rem] rounded-full    '
			},
			orange: {
				coloring:
					'bg-untld-orange-50 text-untld-orange-700 ring-untld-orange-200 ring-[0.063rem] rounded-full   '
			}
		},
		['Pill outline']: {
			gray: {
				coloring: 'text-untld-gray-600  ring-untld-gray-700 ring-[0.09375rem] rounded-full '
			},
			primary: {
				coloring: ' text-untld-primary-600  ring-untld-primary-700 ring-[0.09375rem] rounded-full  '
			},
			error: {
				coloring: 'text-untld-error-600  ring-untld-error-700 ring-[0.09375rem] rounded-full   '
			},
			warning: {
				coloring:
					' text-untld-warning-600  ring-untld-warning-700 ring-[0.09375rem] rounded-full   '
			},
			success: {
				coloring:
					' text-untld-success-600  ring-untld-success-700 ring-[0.09375rem] rounded-full   '
			},
			'gray-blue': {
				coloring:
					' text-untld-gray-blue-600  ring-untld-gray-blue-700 ring-[0.09375rem] rounded-full      '
			},
			'blue-light': {
				coloring:
					' text-untld-blue-light-600  ring-untld-blue-light-700 ring-[0.09375rem] rounded-full    '
			},
			blue: {
				coloring: ' text-untld-blue-600 ring-untld-blue-700 ring-[0.09375rem] rounded-full    '
			},
			indigo: {
				coloring: ' text-untld-indigo-600 ring-untld-indigo-700 ring-[0.09375rem] rounded-full    '
			},
			purple: {
				coloring: ' text-untld-purple-600 ring-untld-purple-700 ring-[0.09375rem] rounded-full    '
			},
			pink: {
				coloring: ' text-untld-pink-600 ring-untld-pink-700 ring-[0.09375rem] rounded-full   '
			},
			rosé: {
				coloring: ' text-untld-rosé-600 ring-untld-rosé-700 ring-[0.09375rem] rounded-full    '
			},
			orange: {
				coloring: ' text-untld-orange-600 ring-untld-orange-700 ring-[0.09375rem] rounded-full    '
			}
		},
		['Badge color']: {
			gray: {
				coloring:
					'bg-untld-gray-100 text-untld-gray-700 ring-untld-gray-200 ring-[0.063rem] rounded-lg'
			},
			primary: {
				coloring:
					'bg-untld-primary-50 text-untld-primary-700 ring-untld-primary-200 ring-[0.063rem] rounded-lg     '
			},
			error: {
				coloring:
					'bg-untld-error-50 text-untld-error-700 ring-untld-error-200 ring-[0.063rem] rounded-lg    '
			},
			warning: {
				coloring:
					'bg-untld-warning-50 text-untld-warning-700 ring-untld-warning-200 ring-[0.063rem] rounded-lg '
			},
			success: {
				coloring:
					'bg-untld-success-50 text-untld-success-700  ring-untld-success-200 ring-[0.063rem] rounded-lg   '
			},
			'gray-blue': {
				coloring:
					'bg-untld-gray-blue-50 text-untld-gray-blue-600  ring-untld-gray-blue-200 ring-[0.063rem] rounded-lg      '
			},
			'blue-light': {
				coloring:
					'bg-untld-blue-light-50 text-untld-blue-light-600  ring-untld-blue-light-200 ring-[0.063rem] rounded-lg    '
			},
			blue: {
				coloring:
					'bg-untld-blue-50 text-untld-blue-700 ring-untld-blue-200 ring-[0.063rem] rounded-lg   '
			},
			indigo: {
				coloring:
					'bg-untld-indigo-50 text-untld-indigo-700 ring-untld-indigo-200 ring-[0.063rem] rounded-lg  '
			},
			purple: {
				coloring:
					'bg-untld-purple-50 text-untld-purple-700 ring-untld-purple-200 ring-[0.063rem] rounded-lg   '
			},
			pink: {
				coloring:
					'bg-untld-pink-50 text-untld-pink-700 ring-untld-pink-200 ring-[0.063rem] rounded-lg  '
			},
			rosé: {
				coloring:
					'bg-untld-rosé-50 text-untld-rosé-700 ring-untld-rosé-200 ring-[0.063rem] rounded-lg    '
			},
			orange: {
				coloring:
					'bg-untld-orange-50 text-untld-orange-700 ring-untld-orange-200 ring-[0.063rem] rounded-lg   '
			}
		},
		['Badge modern']: {
			gray: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			primary: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			error: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			warning: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			success: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			'gray-blue': {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			'blue-light': {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			blue: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			indigo: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			purple: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			pink: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs'
			},
			rosé: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg  shadow-untld-xs'
			},
			orange: {
				coloring:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg  shadow-untld-xs'
			}
		}
	};

	// todo see if I can shorten the object colors

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
    {styleColorsButtons[badgeType][color].coloring}
    {stylePaddings[size].padding}
    {onClick
		? 'pointer-events-auto'
		: 'pointer-events-auto cursor-default'} flex justify-center items-center focus-visible:outline-none focus:outline-none"
>
	<slot name="icon-left" />
	<slot />
	<slot name="icon-right" />
</button>
