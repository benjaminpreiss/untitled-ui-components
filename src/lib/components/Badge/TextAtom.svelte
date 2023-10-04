<script lang="ts">
	import { getContext } from 'svelte';
	import type { size } from './types.js';
	import type { HTMLAttributes } from 'svelte/elements';
	const size = getContext<size>('size');

	const styleSizes = {
		sm: {
			text: 'untld-text-xs'
		},
		md: {
			text: 'untld-text-sm'
		},
		lg: {
			text: 'untld-text-md leading-5 '
		}
	};
</script>

<span {...$$props} class="{$$props.class}  untld-text-medium {styleSizes[size].text}">
	<slot />
</span>
