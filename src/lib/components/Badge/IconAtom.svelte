<script lang="ts">
	import { getContext } from 'svelte';
	import type { size } from './types.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLSpanElement> {
		url: string;
		iconColor?: string;
	}

	export let url: string;
	export let iconColor = getContext<string>('iconColor');
	const size = getContext<size>('size');
</script>

<span
	style="--badge-icon-url:url('{url}')"
	class="
		{size === 'sm'
		? '-mx-[0.125rem] only:-mx-[0.25rem] only:py-2 '
		: size === 'md'
		? `-mx-[0.125rem] first-of-type:-mr-[0.250rem] first-of-type:-ml-[0.125rem] last-of-type:-mx-[0.250rem] only:-mx-[0.250rem] only:py-2.5`
		: `last-of-type:-mr-[0.250rem] last-of-type:-ml-[0.125rem] last-of-type:only:-mx-[0.250rem] first-of-type:-ml-[0.250rem] first-of-type:-mr-[0.125rem] -mx-[0.125rem] last-of-type:only:py-2.5  only:-mx-[0.250rem] only:py-2.5`}
		[mask-position:center]
		[mask-size:contain]
		[mask-repeat:no-repeat]
		[mask-image:var(--badge-icon-url)]
		{iconColor}
	   	h-[0.75rem] w-[0.75rem]
		{$$props.class}"
/>
