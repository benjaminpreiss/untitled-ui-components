<script lang="ts">
	import { getContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { size } from './types.js';
	interface $$Props extends HTMLAttributes<HTMLSpanElement> {
		url: string;
	}
	export let url: string;
	const size = getContext<size>('size');
</script>

<img
	src={url}
	alt="badge"
	class="{$$props.class} {size === 'sm'
		? ' -ml-[0.3125rem] -mr-[0.125rem]'
		: '-ml-[0.375rem] -mr-[0.125rem]'} h-[1rem] w-[1rem] bg-center bg-contain bg-no-repeat"
/>
