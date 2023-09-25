<script lang="ts">
	import { getContext } from 'svelte';
	import type { size, hierarchy } from './types.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		url: string;
	}

	export let url: string;

	const size = getContext<size>('size');
	const destructive = getContext<boolean>('destructive');
	const hierarchy = getContext<hierarchy>('hierarchy');

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
</script>

<span
	{...$$props}
	style="--button-icon-url:url('{url}')"
	class="{$$props.class}
		{size === 'sm' || size === 'md'
		? 'only:mx-[-0.375rem]'
		: size === 'lg' || size === 'xl'
		? 'only:mx-[-0.5rem]'
		: 'only:mx-[-0.75rem]'}
		[mask-position:center]
		[mask-size:contain]
		[mask-image:var(--button-icon-url)]
		{styleColorsIcons[destructive ? 'destructive' : 'nonDestructive'][hierarchy].coloring}
        {size === '2xl' ? 'h-[1.5rem] w-[1.5rem]' : 'h-[1.25rem] w-[1.25rem]'}"
/>
