<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { size, hierarchy } from './types.js';
	import { setContext } from 'svelte';

	interface $$Props extends HTMLButtonAttributes {
		size: size;
		hierarchy?: hierarchy;
		destructive?: boolean;
	}

	export let size: size;
	export let hierarchy: hierarchy = 'primary';
	export let destructive: boolean = false;
	setContext('size', size);
	setContext('destructive', destructive);
	setContext('hierarchy', hierarchy);

	/* TODO: Check why focus in nondestructive secodary-gray does not work */
	const styleColorsButtons = {
		nonDestructive: {
			primary: {
				coloring:
					'bg-untld-brand-600 text-untld-white border rounded-[0.5rem] border-solid border-untld-brand-600 hover:bg-untld-brand-700 disabled:bg-untld-brand-200 focus:shadow-untld-xs-focused-4px-brand-100 focus-visible:shadow-untld-xs-focused-4px-brand-100'
			},
			'secondary-gray': {
				coloring:
					'bg-untld-white text-untld-gray-700 border rounded-[0.5rem] border-solid border-untld-gray-300 hover:bg-untld-gray-50 hover:text-untld-gray-800 disabled:text-untld-gray-300 focus:shadow-untld-xs-focused-4px-secondary-gray-100 focus-visible:shadow-untld-xs-focused-4px-secondary-gray-100'
			},
			'secondary-color': {
				coloring:
					'bg-untld-brand-50 text-untld-brand-700 border rounded-[0.5rem] border-solid border-untld-brand-50 hover:bg-untld-brand-100 hover:text-untld-brand-800 disabled:bg-untld-brand-25 disabled:text-untld-brand-300 focus:shadow-untld-xs-focused-4px-brand-100 focus-visible:shadow-untld-xs-focused-4px-brand-100'
			},
			'tertiary-gray': {
				coloring:
					'text-untld-gray-600 rounded-[0.5rem] hover:bg-untld-gray-50 hover:text-untld-gray-700 disabled:text-untld-gray-300'
			},
			'tertiary-color': {
				coloring:
					'text-untld-brand-700 rounded-[0.5rem] hover:bg-untld-brand-50 hover:text-untld-brand-800 disabled:text-untld-gray-300'
			},
			'link-gray': {
				coloring: 'text-untld-gray-600 hover:text-untld-gray-700 disabled:text-untld-gray-300'
			},
			'link-color': {
				coloring: 'text-untld-brand-700 hover:text-untld-brand-800 disabled:text-untld-gray-300'
			}
		},
		destructive: {
			primary: {
				coloring:
					'bg-untld-error-600 text-untld-white border rounded-[0.5rem] border-solid border-untld-error-600 hover:bg-untld-error-700 disabled:bg-untld-error-200 focus:shadow-untld-xs-focused-4px-error-100 focus-visible:shadow-untld-xs-focused-4px-error-100'
			},
			'secondary-gray': {
				coloring:
					'bg-untld-white text-untld-error-700 border rounded-[0.5rem] border-solid border-untld-error-300 hover:bg-untld-error-50 hover:text-untld-error-800 disabled:text-untld-error-300 focus:shadow-untld-xs-focused-4px-error-100 focus-visible:shadow-untld-xs-focused-4px-error-100'
			},
			'secondary-color': {
				coloring:
					'bg-untld-error-50 text-untld-error-700 border rounded-[0.5rem] border-solid border-untld-error-50 hover:bg-untld-error-100 hover:text-untld-error-800 disabled:bg-untld-error-25 disabled:text-untld-error-300 focus:shadow-untld-xs-focused-4px-error-100 focus-visible:shadow-untld-xs-focused-4px-error-100'
			},
			'tertiary-gray': {
				coloring:
					'text-untld-error-600 rounded-[0.5rem] hover:bg-untld-error-50 hover:text-untld-error-700 disabled:text-untld-error-300'
			},
			'tertiary-color': {
				coloring:
					'text-untld-error-700 rounded-[0.5rem] hover:bg-untld-error-50 hover:text-untld-error-800 disabled:text-untld-error-300'
			},
			'link-gray': {
				coloring: 'text-untld-error-700 hover:text-untld-error-800 disabled:text-untld-error-300'
			},
			'link-color': {
				coloring: 'text-untld-error-700 hover:text-untld-error-800 disabled:text-untld-error-300'
			}
		}
	};

	const stylePaddings = {
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
	};
	// TODO Johanna disable blue ring on keyboard tab focus-within
</script>

<button
	{...$$props}
	class="{$$props.class}
	{hierarchy === 'primary' || hierarchy === 'secondary-color' || hierarchy === 'secondary-gray'
		? 'shadow-untld-xs'
		: ''}
    {styleColorsButtons[destructive ? 'destructive' : 'nonDestructive'][hierarchy].coloring}
    {hierarchy === 'link-gray' || hierarchy === 'link-color' ? '' : stylePaddings[size].padding}
    flex justify-center items-center gap-[0.5rem] disabled:pointer-events-none focus-visible:outline-none"
	on:click
>
	<slot name="icon-left" />
	<!-- If you want to create an icon-only, just add the default slot. -->
	<slot />
	<slot name="icon-right" />
</button>
