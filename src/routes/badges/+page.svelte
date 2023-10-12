<script lang="ts">
	import Badge from '$lib/components/Badge/Badge.svelte';
	import { browser } from '$app/environment';
	import type { badgeType } from '$lib/components/Badge/types.js';

	type color =
		| 'gray'
		| 'brand'
		| 'error'
		| 'warning'
		| 'success'
		| 'gray-blue'
		| 'blue-light'
		| 'blue'
		| 'indigo'
		| 'purple'
		| 'pink'
		| 'rosé'
		| 'orange';
	type size = 'sm' | 'md' | 'lg';

	const colors: color[] = [
		'gray',
		'brand',
		'error',
		'warning',
		'success',
		'gray-blue',
		'blue-light',
		'blue',
		'indigo',
		'purple',
		'pink',
		'rosé',
		'orange'
	];
	const sizes: size[] = ['sm', 'md', 'lg'];

	const badgeType: badgeType[] = ['Pill color', 'Pill outline', 'Badge color', 'Badge modern'];
</script>

<div />

{#if browser}
	<div class=" flex w-full items-center justify-center p-12 overflow-x-auto min-w-max gap-8">
		<div class="flex flex-col space-y-8">
			{#each badgeType as badgeType}
				<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[14.5rem]">
					{#each colors as color}
						{#each sizes as size}
							<Badge
								{size}
								{color}
								{badgeType}
								onClick={() =>
									console.log(
										`Clicked on the Label with size: ` +
											size +
											` color: ` +
											color +
											` and badgeType:` +
											badgeType
									)}>Label</Badge
							>
						{/each}
					{/each}
				</div>
			{/each}
		</div>

		<div class="flex flex-col space-y-8">
			{#each badgeType as badgeType}
				<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[14.5rem]">
					{#each colors as color}
						{#each sizes as size}
							<Badge {size} {color} {badgeType} icon={{ type: 'dot' }}>Label</Badge>
						{/each}
					{/each}
				</div>
			{/each}
		</div>

		<div class="flex flex-col space-y-8">
			{#each badgeType as badgeType}
				<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
					{#each colors as color}
						{#each sizes as size}
							<Badge {size} {color} {badgeType} icon={{ type: 'image', leading: '/dummies/au.svg' }}
								>Label</Badge
							>
						{/each}
					{/each}
				</div>
			{/each}
		</div>

		<div class="flex flex-col space-y-8">
			{#each badgeType as badgeType}
				<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
					{#each colors as color}
						{#each sizes as size}
							<Badge
								{size}
								{color}
								{badgeType}
								icon={{ type: 'image', leading: '/dummies/avatar.svg' }}>Label</Badge
							>
						{/each}
					{/each}
				</div>
			{/each}
		</div>
		<div class="flex flex-col space-y-8">
			{#each badgeType as badgeType}
				<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
					{#each colors as color}
						{#each sizes as size}
							<Badge
								{size}
								{color}
								{badgeType}
								icon={{ type: 'x-close', onClick: () => console.log('click click') }}>Label</Badge
							>
						{/each}
					{/each}
				</div>
			{/each}
		</div>
		<div class="flex flex-col space-y-8">
			{#each badgeType as badgeType}
				<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
					{#each colors as color}
						{#each sizes as size}
							<Badge
								{size}
								{color}
								{badgeType}
								icon={{ type: 'icon', trailing: 'icons/arrow-right.svg' }}>Label</Badge
							>
						{/each}
					{/each}
				</div>
			{/each}
		</div>
		<div class="flex flex-col space-y-8">
			{#each badgeType as badgeType}
				<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
					{#each colors as color}
						{#each sizes as size}
							<Badge
								{size}
								{color}
								{badgeType}
								icon={{ type: 'icon', leading: 'icons/arrow-up.svg' }}>Label</Badge
							>
						{/each}
					{/each}
				</div>
			{/each}
		</div>

		<div class="flex flex-col space-y-8">
			{#each badgeType as badgeType}
				<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[6rem]">
					{#each colors as color}
						{#each sizes as size}
							<Badge
								onClick={() => console.log('button clicked')}
								{size}
								{color}
								{badgeType}
								icon={{
									type: 'icon-only',
									leading: 'icons/plus.svg'
								}}
							/>
						{/each}
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/if}
