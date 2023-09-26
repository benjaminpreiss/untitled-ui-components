<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import ButtonWrapper from './ButtonWrapper.svelte';
	import TextAtom from './TextAtom.svelte';
	import type { size, hierarchy, icon } from './types.js';
	import IconAtom from './IconAtom.svelte';
	import { setContext } from 'svelte';
	import DotAtom from './DotAtom.svelte';
	interface $$Props extends HTMLButtonAttributes {
		size: size;
		hierarchy?: hierarchy;
		destructive?: boolean;
		icon: icon;
	}

	export let size: size;
	export let hierarchy: hierarchy = 'primary';
	export let destructive: boolean = false;
	export let icon: icon;
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
