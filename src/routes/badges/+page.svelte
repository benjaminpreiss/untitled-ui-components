<script lang="ts">
	import Badge from '$lib/components/Badge/Badge.svelte';
	import dummyCountry from '$lib/assets/icons/dummies/au.svg?url';
	import dummyAvatar from '$lib/assets/icons/dummies/avatar.svg?url';
	import arrowRight from '$lib/assets/icons/arrows/arrow-right.svg?url';
	import arrowUp from '$lib/assets/icons/arrows/arrow-up.svg?url';
	import plus from '$lib/assets/icons/general/plus.svg?url';

	import BadgeIconAtom from '$lib/components/Badge/IconAtom.svelte';
	console.log(xClose);

	import type { color, icon, size } from '$lib/components/Badge/types.js';
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

	const noIconNoOutline: { color: color; outline: boolean; size: size }[] = colors.flatMap((c) =>
		sizes.map((s) => ({ color: c, outline: false, size: s }))
	);

	const noIconOutline: { color: color; outline: boolean; size: size }[] = colors.flatMap((c) =>
		sizes.map((s) => ({ color: c, outline: true, size: s }))
	);

	const dotNoOutline: { color: color; outline: boolean; size: size; icon: icon }[] = colors.flatMap(
		(c) => sizes.map((s) => ({ color: c, outline: false, size: s, icon: { type: 'dot' } }))
	);

	const dotOutline: { color: color; outline: boolean; size: size; icon: icon }[] = colors.flatMap(
		(c) => sizes.map((s) => ({ color: c, outline: true, size: s, icon: { type: 'dot' } }))
	);

	const avatarNoOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: false,
				size: s,
				icon: { type: 'avatar', leading: dummyAvatar }
			}))
		);

	const avatarOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: true,
				size: s,
				icon: { type: 'avatar', leading: dummyAvatar }
			}))
		);
	const countryNoOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: false,
				size: s,
				icon: { type: 'country', leading: dummyCountry }
			}))
		);
	const countryOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: true,
				size: s,
				icon: { type: 'country', leading: dummyCountry }
			}))
		);
	const xCloseNoOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: false,
				size: s,
				icon: { type: 'x-close' }
			}))
		);
	const xCloseOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: true,
				size: s,
				icon: { type: 'x-close' }
			}))
		);
	const iconLeadingNoOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: false,
				size: s,
				icon: { type: 'icon', leading: arrowUp }
			}))
		);
	const iconLeadingOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: true,
				size: s,
				icon: { type: 'icon', leading: arrowUp }
			}))
		);
	const iconTrailingNoOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: false,
				size: s,
				icon: { type: 'icon', trailing: arrowRight }
			}))
		);
	const iconTrailingOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: true,
				size: s,
				icon: { type: 'icon', trailing: arrowRight }
			}))
		);

	const noIconNoTextNoOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: false,
				size: s,
				icon: { type: 'icon-only', leading: plus }
			}))
		);

	const noIconNoTextOutline: { color: color; outline: boolean; size: size; icon: icon }[] =
		colors.flatMap((c) =>
			sizes.map((s) => ({
				color: c,
				outline: true,
				size: s,
				icon: { type: 'icon-only', leading: plus }
			}))
		);
</script>

{#if browser}
	<div class=" flex w-full items-center justify-center p-12 overflow-x-auto min-w-max gap-8">
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[14.5rem]">
				{#each noIconNoOutline as { color, outline, size }}
					<Badge {size} {color} {outline}>Label</Badge>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[14.5rem]">
				{#each noIconOutline as { color, outline, size }}
					<Badge {size} {color} {outline}>Label</Badge>
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each dotNoOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each dotOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each countryNoOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each countryOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each avatarNoOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each avatarOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each xCloseNoOutline as { color, outline, size, icon }}
					<Badge
						clickable={true}
						{icon}
						{size}
						{color}
						{outline}
						on:click={() => console.log('this badge is clickable')}>Label</Badge
					>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each xCloseOutline as { color, outline, size, icon }}
					<Badge
						clickable={true}
						{icon}
						{size}
						{color}
						{outline}
						on:click={() => console.log('this badge is clickable')}>Label</Badge
					>
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each iconLeadingNoOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each iconLeadingOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each iconTrailingNoOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each iconTrailingOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each iconTrailingNoOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[15.5rem]">
				{#each iconTrailingOutline as { color, outline, size, icon }}
					<Badge {icon} {size} {color} {outline}>Label</Badge>
				{/each}
			</div>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[6.5rem]">
				{#each noIconNoTextNoOutline as { color, outline, size, icon }}
					<Badge
						clickable={true}
						{icon}
						{size}
						{color}
						{outline}
						on:click={() => console.log('this badge is clickable')}
					/>
				{/each}
			</div>

			<div class="flex flex-wrap col-span-3 justify-center items-center gap-2 w-[6.5rem]">
				{#each noIconNoTextOutline as { color, outline, size, icon }}
					<Badge
						clickable={true}
						{icon}
						{size}
						{color}
						{outline}
						on:click={() => console.log('this badge is clickable')}
					/>
				{/each}
			</div>
		</div>
	</div>
{/if}
