<script lang="ts">
	import BadgeWrapper from './BadgeWrapper.svelte';
	import TextAtom from './TextAtom.svelte';
	import type { size, icon, color } from './types.js';
	import IconAtom from './IconAtom.svelte';
	import DotAtom from './DotAtom.svelte';
	// TODO can remove the raw if we just go for the svg from figma
	import ImageAtom from './ImageAtom.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import XcloseAtom from './XcloseAtom.svelte';

	interface $$Props extends HTMLButtonAttributes {
		size: size;
		color: color;
		icon?: icon;
		outline: boolean;
		onClick?: (() => void) | undefined;
	}

	export let size: size;
	export let color: color;
	export let icon: icon | undefined = undefined;
	export let outline: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
</script>

<BadgeWrapper {outline} {...$$props} {size} {color}>
	{#if icon}
		{#if icon.type === 'dot'}
			<DotAtom slot="icon-left" />
			<TextAtom><slot /></TextAtom>
		{:else if icon.type === 'image'}
			<ImageAtom slot="icon-left" url={icon.leading} />
			<TextAtom><slot /></TextAtom>
		{:else if icon.type === 'x-close'}
			<TextAtom><slot /></TextAtom>
			<XcloseAtom onClick={icon.onClick} slot="icon-right" url={icon.trailing || undefined} />
		{:else if icon.type === 'icon-only'}
			<IconAtom url={icon.leading} />
		{:else if icon.type === 'icon'}
			{#if icon.leading}
				<IconAtom slot="icon-left" url={icon.leading} />
			{/if}
			<TextAtom><slot /></TextAtom>
			{#if icon.trailing}
				<IconAtom slot="icon-right" url={icon.trailing} />
			{/if}
		{/if}
	{:else}
		<TextAtom><slot /></TextAtom>
	{/if}
</BadgeWrapper>
