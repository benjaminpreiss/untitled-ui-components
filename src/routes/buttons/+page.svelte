<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import placeholder from '$lib/assets/icons/general/placeholder.svg?url';
	import type { hierarchy } from '$lib/components/Button/types.js';

	// Define your types
	type size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	type icon =
		| { type: 'dot' }
		| { type: 'icon-only'; leading: string }
		| { type: 'icon'; leading?: string; trailing?: string };

	// Create arrays for each variable
	const sizes: size[] = ['sm', 'md', 'lg', 'xl', '2xl'];
	const hierarchies: hierarchy[] = [
		'primary',
		'secondaryGray',
		'secondaryColor',
		'tertiaryGray',
		'tertiaryColor',
		'linkGray',
		'linkColor'
	];
	const destructives: boolean[] = [false, true];

	const icons: icon[] = [
		{ type: 'icon-only', leading: placeholder },
		{ type: 'icon', leading: undefined, trailing: undefined },
		{ type: 'icon', leading: placeholder, trailing: undefined },
		{ type: 'icon', leading: undefined, trailing: placeholder },
		{ type: 'icon', leading: placeholder, trailing: placeholder },
		{ type: 'dot' }
	];
</script>

<div class="w-full my-[4rem] inline-block overflow-hidden px-[9.31rem]">
	<div
		class="grid grid-cols-min grid-auto-cols-[minmax(450px, 1fr)] gap-4 overflow-x-scroll relative"
	>
		<div class="sticky left-0 col-span-1 pt-20 pb-2 border-b border-untld-gray-300 untld-text-sm">
			Disabled buttons
		</div>
		<div
			class="sticky w-[calc(100vw-19rem)] left-0 col-span-7 pb-2 border-b border-untld-gray-300 untld-text-sm"
		>
			All hierarchies and destructives, size sm
		</div>
		{#each destructives as destructive}
			{#each hierarchies as h}
				<div class="p-5">
					<Button
						class="md:text-blue-500"
						size="sm"
						{destructive}
						hierarchy={h}
						icon={{ type: 'icon', leading: placeholder, trailing: undefined }}
						disabled
					>
						Button
					</Button>
				</div>
			{/each}
		{/each}
		<div class="sticky left-0 col-span-1 pt-20 pb-2 border-b border-untld-gray-300 untld-text-sm">
			All icon types and sizes
		</div>
		{#each destructives as destructive}
			{#each hierarchies as h}
				<div
					class="sticky w-[calc(100vw-19rem)] left-0 col-span-7 pb-2 border-b border-untld-gray-300 untld-text-sm"
				>
					Hierarchy: {h}
				</div>

				{#each icons as i}
					{#if h === 'linkGray' || h === 'linkColor'}
						{#if i.type === 'dot' || i.type === 'icon'}
							<div>
								{#each sizes as s}
									<div class="p-5">
										<Button
											size={s}
											hierarchy={h}
											{destructive}
											icon={i}
											on:click={() => console.log('on:click')}
										>
											Button
										</Button>
									</div>
								{/each}
							</div>
						{/if}
					{/if}
					{#if h !== 'linkGray' && h !== 'linkColor'}
						<div>
							{#each sizes as s}
								<div class="p-5">
									<Button
										size={s}
										hierarchy={h}
										{destructive}
										icon={i}
										on:click={() => console.log('on:click')}
									>
										Button
									</Button>
								</div>
							{/each}
						</div>
					{/if}
				{/each}
			{/each}
		{/each}
	</div>
</div>
