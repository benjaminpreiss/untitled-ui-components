<script lang="ts">
	import BadgeWrapper from './BadgeWrapper.svelte';
	import TextAtom from './TextAtom.svelte';
	import type { size, icon, color } from './types.js';
	import IconAtom from './IconAtom.svelte';
	import DotAtom from './DotAtom.svelte';
	import xclose from '$lib/assets/icons/general/x-close.svg?url';
	import dummyCountry from '$lib/assets/icons/dummies/au.svg?url';
	import dummyAvatar from '$lib/assets/icons/dummies/avatar.svg?url';
	import { setContext } from 'svelte';
	import ImageAtom from './ImageAtom.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	// todo fix the onclick as props later

	/* TODO: specify props type
	
	interface $$Props extends HTMLButtonAttributes {
		size: size;
		color: color;
		icon: icon;
		outline: boolean;
	}

	Hint: Whenever you need a property from $$props, just cast it: 

	const onClick = ($$props as $$Props)["on:click"]
	
	*/

	/* 
	TODO: for x-close without leading specified, import svg as raw and adjust stroke width
	import xClose from '$lib/assets/icons/general/x-close.svg?raw';

	<div>{@html xClose}</div>
	Hint: set stroke width via tailwind class or via style tag
	*/
	/* TODO: for all other ICONS, use svg as mask and only adjust the color, NOT THE STROKE */
	/* TODO: for all image */

	export let size: size;
	export let color: color;
	export let icon: icon | undefined = undefined;
	export let outline: boolean = false;
	// to do how can we pass in on:click, but access the $$props['on:click'] property to be able to set the badge to a button or not
	$: console.log($$props);
	// currently added a clickable boolean
	export let clickable: boolean = false;

	setContext('icon', icon);
</script>

<BadgeWrapper {clickable} {outline} {...$$props} {size} {color} on:click>
	{#if icon}
		{#if icon.type === 'dot'}
			<DotAtom slot="icon-left" />
			<TextAtom><slot /></TextAtom>
		{:else if icon.type === 'avatar'}
			<ImageAtom slot="icon-left" url={icon.leading ?? dummyAvatar} />
			<TextAtom><slot /></TextAtom>
		{:else if icon.type === 'country'}
			<ImageAtom slot="icon-left" url={icon.leading ?? dummyCountry} />
			<TextAtom><slot /></TextAtom>
		{:else if icon.type === 'x-close'}
			<TextAtom><slot /></TextAtom>
			<IconAtom slot="icon-right" url={icon.trailing ?? xclose} />
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
