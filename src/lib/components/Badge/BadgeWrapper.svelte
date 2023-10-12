<script lang="ts">
	import type { DOMAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { size, badgeType, colors } from './types.js';
	import { setContext } from 'svelte';
	interface $$Props extends HTMLButtonAttributes {
		size: size;
		badgeType: badgeType;
		color: colors;
		onClick?: DOMAttributes<HTMLButtonElement>['on:click'];
	}
	export let size: size;
	export let badgeType: badgeType;
	export let color: colors;
	export let onClick: DOMAttributes<HTMLButtonElement>['on:click'] = undefined;

	setContext('color', color);
	setContext('badgeType', badgeType);
	setContext('size', size);

	const styleColorsBadges = {
		['Pill color']: {
			gray: {
				backgroundColor:
					'bg-untld-gray-100 text-untld-gray-700 ring-untld-gray-200 ring-[0.063rem] rounded-full',
				iconColor: 'bg-untld-gray-500'
			},
			brand: {
				backgroundColor:
					'bg-untld-brand-50 text-untld-brand-700 ring-untld-brand-200 ring-[0.063rem] rounded-full     ',
				iconColor: 'bg-untld-brand-500'
			},
			error: {
				backgroundColor:
					'bg-untld-error-50 text-untld-error-700 ring-untld-error-200 ring-[0.063rem] rounded-full    ',
				iconColor: 'bg-untld-error-500'
			},
			warning: {
				backgroundColor:
					'bg-untld-warning-50 text-untld-warning-700 ring-untld-warning-200 ring-[0.063rem] rounded-full ',
				iconColor: 'bg-untld-warning-500'
			},
			success: {
				backgroundColor:
					'bg-untld-success-50 text-untld-success-700  ring-untld-success-200 ring-[0.063rem] rounded-full   ',
				iconColor: 'bg-untld-success-500'
			},
			'gray-blue': {
				backgroundColor:
					'bg-untld-gray-blue-50 text-untld-gray-blue-600  ring-untld-gray-blue-200 ring-[0.063rem] rounded-full      ',
				iconColor: 'bg-untld-gray-blue-500'
			},
			'blue-light': {
				backgroundColor:
					'bg-untld-blue-light-50 text-untld-blue-light-600  ring-untld-blue-light-200 ring-[0.063rem] rounded-full    ',
				iconColor: 'bg-untld-blue-light-500'
			},
			blue: {
				backgroundColor:
					'bg-untld-blue-50 text-untld-blue-700 ring-untld-blue-200 ring-[0.063rem] rounded-full   ',
				iconColor: 'bg-untld-blue-500'
			},
			indigo: {
				backgroundColor:
					'bg-untld-indigo-50 text-untld-indigo-700 ring-untld-indigo-200 ring-[0.063rem] rounded-full  ',
				iconColor: 'bg-untld-indigo-500'
			},
			purple: {
				backgroundColor:
					'bg-untld-purple-50 text-untld-purple-700 ring-untld-purple-200 ring-[0.063rem] rounded-full   ',
				iconColor: 'bg-untld-purple-500'
			},
			pink: {
				backgroundColor:
					'bg-untld-pink-50 text-untld-pink-700 ring-untld-pink-200 ring-[0.063rem] rounded-full  ',
				iconColor: 'bg-untld-pink-500'
			},
			rosé: {
				backgroundColor:
					'bg-untld-rosé-50 text-untld-rosé-700 ring-untld-rosé-200 ring-[0.063rem] rounded-full    ',
				iconColor: 'bg-untld-rosé-500'
			},
			orange: {
				backgroundColor:
					'bg-untld-orange-50 text-untld-orange-700 ring-untld-orange-200 ring-[0.063rem] rounded-full   ',
				iconColor: 'bg-untld-orange-500'
			}
		},
		['Pill outline']: {
			gray: {
				backgroundColor: 'text-untld-gray-600  ring-untld-gray-700 ring-[0.09375rem] rounded-full ',
				iconColor: 'bg-untld-gray-600'
			},
			brand: {
				backgroundColor:
					' text-untld-brand-600  ring-untld-brand-700 ring-[0.09375rem] rounded-full  ',
				iconColor: 'bg-untld-brand-600'
			},
			error: {
				backgroundColor:
					'text-untld-error-600  ring-untld-error-700 ring-[0.09375rem] rounded-full   ',
				iconColor: 'bg-untld-error-600'
			},
			warning: {
				backgroundColor:
					' text-untld-warning-600  ring-untld-warning-700 ring-[0.09375rem] rounded-full   ',
				iconColor: 'bg-untld-warning-600'
			},
			success: {
				backgroundColor:
					' text-untld-success-600  ring-untld-success-700 ring-[0.09375rem] rounded-full   ',
				iconColor: 'bg-untld-success-600'
			},
			'gray-blue': {
				backgroundColor:
					' text-untld-gray-blue-600  ring-untld-gray-blue-700 ring-[0.09375rem] rounded-full      ',
				iconColor: 'bg-untld-gray-blue-600'
			},
			'blue-light': {
				backgroundColor:
					' text-untld-blue-light-600  ring-untld-blue-light-700 ring-[0.09375rem] rounded-full    ',
				iconColor: 'bg-untld-blue-light-600'
			},
			blue: {
				backgroundColor:
					' text-untld-blue-600 ring-untld-blue-700 ring-[0.09375rem] rounded-full    ',
				iconColor: 'bg-untld-blue-600'
			},
			indigo: {
				backgroundColor:
					' text-untld-indigo-600 ring-untld-indigo-700 ring-[0.09375rem] rounded-full    ',
				iconColor: 'bg-untld-indigo-600'
			},
			purple: {
				backgroundColor:
					' text-untld-purple-600 ring-untld-purple-700 ring-[0.09375rem] rounded-full    ',
				iconColor: 'bg-untld-purple-600'
			},
			pink: {
				backgroundColor:
					' text-untld-pink-600 ring-untld-pink-700 ring-[0.09375rem] rounded-full   ',
				iconColor: 'bg-untld-pink-600'
			},
			rosé: {
				backgroundColor:
					' text-untld-rosé-600 ring-untld-rosé-700 ring-[0.09375rem] rounded-full    ',
				iconColor: 'bg-untld-rosé-600'
			},
			orange: {
				backgroundColor:
					' text-untld-orange-600 ring-untld-orange-700 ring-[0.09375rem] rounded-full    ',
				iconColor: 'bg-untld-orange-600'
			}
		},
		['Badge color']: {
			gray: {
				backgroundColor:
					'bg-untld-gray-100 text-untld-gray-700 ring-untld-gray-200 ring-[0.063rem] rounded-lg',
				iconColor: 'bg-untld-gray-500'
			},
			brand: {
				backgroundColor:
					'bg-untld-brand-50 text-untld-brand-700 ring-untld-brand-200 ring-[0.063rem] rounded-lg     ',
				iconColor: 'bg-untld-brand-500'
			},
			error: {
				backgroundColor:
					'bg-untld-error-50 text-untld-error-700 ring-untld-error-200 ring-[0.063rem] rounded-lg    ',
				iconColor: 'bg-untld-error-500'
			},
			warning: {
				backgroundColor:
					'bg-untld-warning-50 text-untld-warning-700 ring-untld-warning-200 ring-[0.063rem] rounded-lg ',
				iconColor: 'bg-untld-warning-500'
			},
			success: {
				backgroundColor:
					'bg-untld-success-50 text-untld-success-700  ring-untld-success-200 ring-[0.063rem] rounded-lg   ',
				iconColor: 'bg-untld-success-500'
			},
			'gray-blue': {
				backgroundColor:
					'bg-untld-gray-blue-50 text-untld-gray-blue-600  ring-untld-gray-blue-200 ring-[0.063rem] rounded-lg      ',
				iconColor: 'bg-untld-gray-blue-500'
			},
			'blue-light': {
				backgroundColor:
					'bg-untld-blue-light-50 text-untld-blue-light-600  ring-untld-blue-light-200 ring-[0.063rem] rounded-lg    ',
				iconColor: 'bg-untld-blue-light-500'
			},
			blue: {
				backgroundColor:
					'bg-untld-blue-50 text-untld-blue-700 ring-untld-blue-200 ring-[0.063rem] rounded-lg   ',
				iconColor: 'bg-untld-blue-500'
			},
			indigo: {
				backgroundColor:
					'bg-untld-indigo-50 text-untld-indigo-700 ring-untld-indigo-200 ring-[0.063rem] rounded-lg  ',
				iconColor: 'bg-untld-indigo-500'
			},
			purple: {
				backgroundColor:
					'bg-untld-purple-50 text-untld-purple-700 ring-untld-purple-200 ring-[0.063rem] rounded-lg   ',
				iconColor: 'bg-untld-purple-500'
			},
			pink: {
				backgroundColor:
					'bg-untld-pink-50 text-untld-pink-700 ring-untld-pink-200 ring-[0.063rem] rounded-lg  ',
				iconColor: 'bg-untld-pink-500'
			},
			rosé: {
				backgroundColor:
					'bg-untld-rosé-50 text-untld-rosé-700 ring-untld-rosé-200 ring-[0.063rem] rounded-lg    ',
				iconColor: 'bg-untld-rosé-500'
			},
			orange: {
				backgroundColor:
					'bg-untld-orange-50 text-untld-orange-700 ring-untld-orange-200 ring-[0.063rem] rounded-lg   ',
				iconColor: 'bg-untld-orange-500'
			}
		},
		['Badge modern']: {
			gray: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-gray-500'
			},
			brand: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-brand-500'
			},
			error: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-error-500'
			},
			warning: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-gray-500'
			},
			success: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-success-500'
			},
			'gray-blue': {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-gray-blue-500'
			},
			'blue-light': {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-blue-light-500'
			},
			blue: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-blue-500'
			},
			indigo: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-indigo-500'
			},
			purple: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-purple-500'
			},
			pink: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg shadow-untld-xs',
				iconColor: 'bg-untld-pink-500'
			},
			rosé: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg  shadow-untld-xs',
				iconColor: 'bg-untld-rosé-500'
			},
			orange: {
				backgroundColor:
					'bg-untld-white text-untld-gray-700 ring-untld-gray-300 ring-[0.063rem] rounded-lg  shadow-untld-xs',
				iconColor: 'bg-untld-orange-500'
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
	setContext('iconColor', styleColorsBadges[badgeType][color].iconColor);
</script>

<button
	{...$$props}
	on:click={onClick}
	class="{$$props.class}  
    {styleColorsBadges[badgeType][color].backgroundColor}
    {stylePaddings[size].padding}
    {onClick
		? 'pointer-events-auto'
		: 'pointer-events-auto cursor-default'} flex justify-center items-center focus-visible:outline-none focus:outline-none"
>
	<slot name="icon-left" />
	<slot />
	<slot name="icon-right" />
</button>
