<script lang="ts">
	import { getContext } from 'svelte';
	import type { size } from './types.js';
	import type { HTMLAttributes } from 'svelte/elements';
	const size = getContext<size>('size');

	interface $$Props extends HTMLAttributes<HTMLSpanElement> {}

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
</script>

<span {...$$props} class="{$$props.class} untld-text-regular {styleSizes[size].text}">
	<slot />
</span>
