<script lang="ts">
	import dotIcon from '$lib/assets/icons/_Dot.svg?url';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import BaseButton from './BaseButton.svelte';
	import Text from './Text.svelte';
	import type { size, hierarchy, icon } from './types.js';
	import Icon from './Icon.svelte';
	import { setContext } from 'svelte';
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

<BaseButton {...$$props} {size} {hierarchy} {destructive}>
	{#if icon.type === 'dot'}
		<Icon slot="icon-left" url={dotIcon} class="[&&]:h-[0.625rem] [&&]:w-[0.625rem]" />
		<Text><slot /></Text>
	{:else}
		{#if icon.leading}
			<Icon slot="icon-left" url={icon.leading} />
		{/if}
		{#if icon.type === 'icon'}
			<Text><slot /></Text>
		{/if}
		{#if icon.type === 'icon' && icon.trailing}
			<Icon slot="icon-right" url={icon.trailing} />
		{/if}
	{/if}
</BaseButton>
