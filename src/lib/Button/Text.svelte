<script lang="ts">
	import { getContext } from 'svelte';
	import type { size } from './types.js';
	const size = getContext<size>('size');

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

<span
	class="
            untld-text-regular
            {styleSizes[size].text}
        "
>
	<slot />
</span>
