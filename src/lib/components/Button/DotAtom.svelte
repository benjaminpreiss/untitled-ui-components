<script lang="ts">
	import IconAtom from './IconAtom.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import dotIcon from '$lib/assets/icons/_Dot.svg?url';

	interface $$Props extends HTMLAttributes<HTMLSpanElement> {}
</script>

<IconAtom
	{...$$props}
	slot="icon-left"
	url={dotIcon}
	class="{$$props.class} [&&]:h-[0.625rem] [&&]:w-[0.625rem]"
/>
