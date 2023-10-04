<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	interface $$Props extends HTMLAttributes<HTMLSpanElement> {
		url: string;
	}
	export let url: string;
</script>

<!-- todo temporary solution, how can we make sure that images passed in are also rendered? Just like icons without the ImageAtom -->
<img
	src={url}
	alt="badge"
	class="{$$props.class} h-[1rem] w-[1rem] bg-center bg-contain bg-no-repeat"
/>
