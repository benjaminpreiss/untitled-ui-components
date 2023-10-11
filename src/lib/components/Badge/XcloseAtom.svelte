<script lang="ts">
	import { getContext } from 'svelte';
	import type { color, size, colors } from './types.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import Xclose from './x-close.svg?url';

	interface $$Props extends HTMLAttributes<HTMLSpanElement> {
		url?: string;
		iconColor?: string;
		onClick: () => void;
	}

	export let url: string = Xclose;
	export let onClick: () => void;
	export let iconColor = getContext<string>('iconColor');
	const size = getContext<size>('size');
</script>

<button
	on:click={onClick}
	style="--badge-icon-url:url('{url}')"
	class="{$$props.class}
		{size === 'sm'
		? '-mx-[0.125rem] '
		: size === 'md'
		? `-mx-[0.125rem] first-of-type:-mr-[0.250rem] first-of-type:-ml-[0.125rem] last-of-type:-mx-[0.250rem]`
		: `last-of-type:-mr-[0.250rem] last-of-type:-ml-[0.125rem] first-of-type:-ml-[0.250rem] first-of-type:-mr-[0.125rem] -mx-[0.125rem]`}
		[mask-position:center]
		[mask-size:contain]
		[mask-repeat:no-repeat]
		[mask-image:var(--badge-icon-url)]
		{iconColor}
	   	h-[0.75rem] w-[0.75rem]"
/>
