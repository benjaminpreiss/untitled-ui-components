<script lang="ts">
	import { getContext } from 'svelte';
	import type { color, icon, size } from './types.js';
	import type { HTMLAttributes } from 'svelte/elements';
	interface $$Props extends HTMLAttributes<HTMLSpanElement> {
		url: string;
	}
	export let url: string;

	const color = getContext<color>('color');
	const icon = getContext<icon>('icon');
	const outline = getContext<boolean>('outline');

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

<!-- TODO: move the below mask specs to tailwind class and only set css vars in style tag. Refer to iconatom in button. -->
<span
	{...$$props}
	style="--badge-icon-url:url('{url}'); 
	   mask-image:var(--badge-icon-url); 
	   -webkit-mask-image:var(--badge-icon-url); 
	   mask-position:center; 
	   -webkit-mask-position:center; 
	   mask-size:contain; 
	   -webkit-mask-size:contain; 
	   mask-repeat:no-repeat; 
	   -webkit-mask-repeat:no-repeat;"
	class="{$$props.class}
	   {styleColorsIcons[outline ? 'outline' : 'noOutline'][color].coloring}
	   {icon?.type === 'dot' ? 'h-[0.625rem] w-[0.625rem]' : 'h-[0.75rem] w-[0.75rem]'} "
/>
