<script lang="ts">
	type DataItem = {
		header: {
			stylename: string;
			styledata: string;
		};
		tailwind: string;
	};

	const data: DataItem[] = [
		{
			header: {
				stylename: 'Display 2xl',
				styledata: 'Font size: 72px / 4.5rem | Line height: 90px / 5.625rem | Tracking: -2%'
			},
			tailwind: 'untld-display-2xl'
		},
		{
			header: {
				stylename: 'Display xl',
				styledata: 'Font size: 60px / 3.75rem | Line height: 72px / 4.5rem | Tracking: -2%'
			},
			tailwind: 'untld-display-xl'
		},
		{
			header: {
				stylename: 'Display lg',
				styledata: 'Font size: 48px / 3rem | Line height: 60px / 3.75rem | Tracking: -2%'
			},
			tailwind: 'untld-display-lg'
		},
		{
			header: {
				stylename: 'Display md',
				styledata: 'Font size: 36px / 2.25rem | Line height: 44px / 2.75rem | Tracking: -2%'
			},
			tailwind: 'untld-display-md'
		},
		{
			header: {
				stylename: 'Display sm',
				styledata: 'Font size: 30px / 1.875rem | Line height: 38px / 2.375rem'
			},
			tailwind: 'untld-display-sm'
		},
		{
			header: {
				stylename: 'Text xl',
				styledata: 'Font size: 20px / 1.25rem | Line height: 30px / 1.875rem'
			},
			tailwind: 'untld-text-xl'
		},
		{
			header: {
				stylename: 'Text lg',
				styledata: 'Font size: 18px / 1.125rem | Line height: 28px / 1.75rem'
			},
			tailwind: 'untld-text-lg'
		},
		{
			header: {
				stylename: 'Text md',
				styledata: 'Font size: 16px / 1rem | Line height: 24px / 1.5rem'
			},
			tailwind: 'untld-text-md'
		},
		{
			header: {
				stylename: 'Text sm',
				styledata: 'Font size: 14px / 0.875rem | Line height: 20px / 1.25rem'
			},
			tailwind: 'untld-text-sm'
		},
		{
			header: {
				stylename: 'Text xs',
				styledata: 'Font size: 12px / 0.75rem | Line height: 18px / 1.125rem'
			},
			tailwind: 'untld-text-xs'
		}
	];
</script>

<div class="flex flex-col items-start justify-start p-4 antialiased">
	<h2 class="text-xl">Inter</h2>
	<h1 class="text-5xl">Ag</h1>
	<p>
		ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
		abcdefghijklmnopqrstuvwxyz <br />
		0123456789 <br />
		!@#$%^&*()
	</p>
</div>

<div class="w-full p-4 inline-block overflow-hidden">
	<div class="grid grid-cols-min gap-6 overflow-x-scroll w-full relative">
		{#each data as item}
			<div
				class=" col-span-4 sticky w-[calc(100vw-2rem)] left-0 mt-10 pb-2 border-b border-gray-200"
			>
				<div class="flex justify-between">
					<div class="flex">
						<div class="mr-4">{item.header.stylename}</div>
						<div class="border border-black rounded-md antialiased">
							&lt;/&gt; class="{item.tailwind}"
						</div>
					</div>
					<div>{item.header.styledata}</div>
				</div>
			</div>
			<div class="{item.tailwind} untld-text-regular">
				{item.header.stylename} <br />
				Regular
			</div>
			<div class="{item.tailwind} untld-text-medium">
				{item.header.stylename} <br />
				Medium
			</div>
			<div class="{item.tailwind} untld-text-semibold">
				{item.header.stylename} <br />
				Semibold
			</div>
			<div class="{item.tailwind} untld-text-bold">
				{item.header.stylename} <br />
				Bold
			</div>
			<div class="border border-black rounded-md antialiased">
				&lt;/&gt; class="untld-text-regular"
			</div>
			<div class="border border-black rounded-md antialiased">
				&lt;/&gt; class="untld-text-medium"
			</div>
			<div class="border border-black rounded-md antialiased">
				&lt;/&gt; class="untld-text-semibold"
			</div>
			<div class="border border-black rounded-md antialiased">
				&lt;/&gt; class="untld-text-bold"
			</div>
		{/each}
	</div>
</div>
