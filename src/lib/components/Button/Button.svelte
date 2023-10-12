<script lang="ts" generics="H extends hierarchy">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import ButtonWrapper from './ButtonWrapper.svelte';
	import TextAtom from './TextAtom.svelte';
	import type { size, hierarchy, icon } from './types.js';
	import IconAtom from './IconAtom.svelte';
	import { setContext } from 'svelte';
	import DotAtom from './DotAtom.svelte';
	interface $$Props extends HTMLButtonAttributes {
		size: size;
		hierarchy: H;
		destructive?: boolean;
		icon: icon<H>;
	}
	const onClick = ($$props as $$Props)['on:click'];

	export let size: size;
	export let hierarchy: H;
	export let destructive: boolean = false;
	export let icon: icon<H>;
	setContext('icon', icon);
</script>

<ButtonWrapper {...$$props} {size} {hierarchy} {destructive}>
	{#if icon.type === 'dot'}
		<DotAtom slot="icon-left" />
		<TextAtom><slot /></TextAtom>
	{:else}
		{#if icon.leading}
			<IconAtom slot="icon-left" url={icon.leading} />
		{/if}
		{#if icon.type === 'icon'}
			<TextAtom><slot /></TextAtom>
		{/if}
		{#if icon.type === 'icon' && icon.trailing}
			<IconAtom slot="icon-right" url={icon.trailing} />
		{/if}
	{/if}
</ButtonWrapper>
