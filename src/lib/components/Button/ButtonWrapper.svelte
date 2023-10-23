<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { size, hierarchy } from './types.js';
	import { setContext } from 'svelte';
	import { cx } from 'styled-system/css';
	import { button_buttonWrapper } from 'styled-system/recipes';

	interface $$Props extends HTMLButtonAttributes {
		size: size;
		hierarchy?: hierarchy;
		destructive?: boolean;
	}

	export let size: size;
	export let hierarchy: hierarchy = 'primary';
	export let destructive: boolean = false;
	setContext('size', size);
	setContext('destructive', destructive);
	setContext('hierarchy', hierarchy);
	// TODO Johanna disable blue ring on keyboard tab focus-within
</script>

<button
	{...$$props}
	class={cx(
		button_buttonWrapper({ destructive: destructive, hierarchy: hierarchy, size }),
		$$props.class
	)}
	on:click
>
	<slot name="icon-left" />
	<!-- If you want to create an icon-only, just add the default slot. -->
	<slot />
	<slot name="icon-right" />
</button>
