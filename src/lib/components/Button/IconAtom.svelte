<script lang="ts">
	import { getContext } from 'svelte';
	import type { size, hierarchy } from './types.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLSpanElement> {
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
			secondaryGray: {
				coloring: 'bg-untld-gray-700 hover:bg-untld-gray-800 disabled:bg-untld-gray-300'
			},
			secondaryColor: {
				coloring: 'bg-untld-brand-700 hover:bg-untld-brand-800 disabled:bg-untld-brand-300'
			},
			tertiaryGray: {
				coloring: 'bg-untld-gray-600 hover:bg-untld-gray-700 disabled:bg-untld-gray-300'
			},
			tertiaryColor: {
				coloring: 'bg-untld-brand-700 hover:bg-untld-brand-800 disabled:bg-untld-gray-300'
			},
			linkGray: {
				coloring: 'bg-untld-gray-600 hover:bg-untld-gray-700 disabled:bg-untld-gray-300'
			},
			linkColor: {
				coloring: 'bg-untld-brand-700 hover:bg-untld-brand-800 disabled:bg-untld-gray-300'
			}
		},
		destructive: {
			primary: {
				coloring: 'bg-untld-white'
			},
			secondaryGray: {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			},
			secondaryColor: {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			},
			tertiaryGray: {
				coloring: 'bg-untld-error-600 hover:bg-untld-error-700 disabled:bg-untld-error-300'
			},
			tertiaryColor: {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			},
			linkGray: {
				coloring: 'bg-untld-error-700 hover:bg-untld-error-800 disabled:bg-untld-error-300'
			},
			linkColor: {
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
		[mask-repeat:no-repeat]
		[mask-image:var(--button-icon-url)]
		{styleColorsIcons[destructive ? 'destructive' : 'nonDestructive'][hierarchy].coloring}
        {size === '2xl' ? 'h-[1.5rem] w-[1.5rem]' : 'h-[1.25rem] w-[1.25rem]'}"
/>
