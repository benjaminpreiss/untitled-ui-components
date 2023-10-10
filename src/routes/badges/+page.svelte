<script lang="ts">
	import Badge from '$lib/components/Badge/Badge.svelte';
	import { browser } from '$app/environment';

	type color =
		| 'gray'
		| 'primary'
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
		'primary',
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
</script>

<div />

{#if browser}
	<div class=" flex w-full items-center justify-center p-12 overflow-x-auto min-w-max gap-8">
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[14.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={false}
							onClick={() =>
								console.log(
									`Clicked on the Label with size: ` +
										size +
										` color: ` +
										color +
										` and outline:` +
										false
								)}>Label</Badge
						>
					{/each}
				{/each}
			</div>
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[14.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={true}
							onClick={() =>
								console.log(
									`Clicked on the Label with size: ` +
										size +
										`  color: ` +
										color +
										` and outline:` +
										true
								)}>Label</Badge
						>
					{/each}
				{/each}
			</div>
		</div>

		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[14.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge {size} {color} outline={false} icon={{ type: 'dot' }}>Label</Badge>
					{/each}
				{/each}
			</div>
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[14.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge {size} {color} outline={true} icon={{ type: 'dot' }}>Label</Badge>
					{/each}
				{/each}
			</div>
		</div>

		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={false}
							icon={{ type: 'image', leading: '/dummies/au.svg' }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={true}
							icon={{ type: 'image', leading: '/dummies/au.svg' }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
		</div>

		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={false}
							icon={{ type: 'image', leading: '/dummies/avatar.svg' }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={true}
							icon={{ type: 'image', leading: '/dummies/avatar.svg' }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={false}
							icon={{ type: 'x-close', onClick: () => console.log('click click') }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={true}
							icon={{ type: 'x-close', onClick: () => console.log('click click') }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={false}
							icon={{ type: 'icon', trailing: 'icons/arrow-right.svg' }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={true}
							icon={{ type: 'icon', trailing: 'icons/arrow-right.svg' }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={false}
							icon={{ type: 'icon', trailing: 'icons/arrow-up.svg' }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							{size}
							{color}
							outline={true}
							icon={{ type: 'icon', trailing: 'icons/arrow-up.svg' }}>Label</Badge
						>
					{/each}
				{/each}
			</div>
		</div>

		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[6rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							onClick={() => console.log('button clicked')}
							{size}
							{color}
							outline={false}
							icon={{
								type: 'icon-only',
								leading: 'icons/plus.svg'
							}}
						/>
					{/each}
				{/each}
			</div>
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[6rem]">
				{#each colors as color}
					{#each sizes as size}
						<Badge
							onClick={() => console.log('button clicked')}
							{size}
							{color}
							outline={true}
							icon={{
								type: 'icon-only',
								leading: 'icons/plus.svg'
							}}>Label</Badge
						>
					{/each}
				{/each}
			</div>
		</div>
	</div>
{/if}
