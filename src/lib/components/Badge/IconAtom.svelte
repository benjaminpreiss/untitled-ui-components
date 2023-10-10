<script lang="ts">
	import { getContext } from 'svelte';
	import type { color, icon, size } from './types.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLSpanElement> {
		url: string;
	}

	export let url: string;
	const color = getContext<color>('color');
	const outline = getContext<boolean>('outline');
	const size = getContext<size>('size');

	const styleColorsIcons = {
		outline: {
			gray: {
				coloring: 'bg-untld-gray-500'
			},
			primary: {
				coloring: 'bg-untld-primary-500 '
			},
			error: {
				coloring: 'bg-untld-error-500 '
			},
			warning: {
				coloring: 'bg-untld-warning-500 '
			},
			success: {
				coloring: 'bg-untld-success-500 '
			},
			'gray-blue': {
				coloring: 'bg-untld-gray-blue-500 '
			},
			'blue-light': {
				coloring: 'bg-untld-blue-light-500 '
			},
			blue: {
				coloring: 'bg-untld-blue-500 '
			},
			indigo: {
				coloring: 'bg-untld-indigo-500 '
			},
			purple: {
				coloring: 'bg-untld-purple-500 '
			},
			pink: {
				coloring: 'bg-untld-pink-500 '
			},
			rosé: {
				coloring: 'bg-untld-rosé-500 '
			},
			orange: {
				coloring: 'bg-untld-orange-500 '
			}
		},
		noOutline: {
			gray: {
				coloring: 'bg-untld-gray-600'
			},
			primary: {
				coloring: 'bg-untld-primary-600 '
			},
			error: {
				coloring: 'bg-untld-error-600 '
			},
			warning: {
				coloring: 'bg-untld-warning-600 '
			},
			success: {
				coloring: 'bg-untld-success-600 '
			},
			'gray-blue': {
				coloring: 'bg-untld-gray-blue-600 '
			},
			'blue-light': {
				coloring: 'bg-untld-blue-light-600 '
			},
			blue: {
				coloring: 'bg-untld-blue-600 '
			},
			indigo: {
				coloring: 'bg-untld-indigo-600 '
			},
			purple: {
				coloring: 'bg-untld-purple-600 '
			},
			pink: {
				coloring: 'bg-untld-pink-600 '
			},
			rosé: {
				coloring: 'bg-untld-rosé-600 '
			},
			orange: {
				coloring: 'bg-untld-orange-600 '
			}
		}
	};
</script>

<span
	style="--badge-icon-url:url('{url}')"
	class="
		{size === 'sm'
		? '-mx-[0.125rem] only:-mx-[0.5rem] '
		: size === 'md'
		? `-mx-[0.125rem] first-of-type:-mr-[0.250rem] first-of-type:-ml-[0.125rem] last-of-type:-mx-[0.250rem] only:-mx-[0.250rem] only:py-2.5`
		: `last-of-type:-mr-[0.250rem] last-of-type:-ml-[0.125rem] last-of-type:only:-mx-[0.250rem] first-of-type:-ml-[0.250rem] first-of-type:-mr-[0.125rem] -mx-[0.125rem] last-of-type:only:py-2.5  only:-mx-[0.250rem] only:py-2.5`}
		[mask-position:center]
		[mask-size:contain]
		[mask-repeat:no-repeat]
		[mask-image:var(--badge-icon-url)]
		{styleColorsIcons[outline ? 'outline' : 'noOutline'][color].coloring}
	   	h-[0.75rem] w-[0.75rem]
		{$$props.class}"
/>
