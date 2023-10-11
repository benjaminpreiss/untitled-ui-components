<script lang="ts" generics="T extends badgeType, I extends icon | undefined = undefined">
	import BadgeWrapper from './BadgeWrapper.svelte';
	import TextAtom from './TextAtom.svelte';
	import type { size, icon, color, badgeType } from './types.js';
	import IconAtom from './IconAtom.svelte';
	import DotAtom from './DotAtom.svelte';
	import ImageAtom from './ImageAtom.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import XcloseAtom from './XcloseAtom.svelte';
	import type { DOMAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		size: size;
		color: color<T, I>;
		icon?: I;
		badgeType: T;
		onClick?: DOMAttributes<HTMLButtonElement>['on:click'];
	}

	export let size: size;
	export let color: color<T, I>;
	export let icon: I | undefined = undefined;
	export let badgeType: badgeType;
</script>

<BadgeWrapper {badgeType} {...$$props} {size} {color}>
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
