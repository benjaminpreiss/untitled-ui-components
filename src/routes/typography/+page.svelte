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

<div class="flex flex-col items-start justify-start m-10 p-4 antialiased space-y-4">
	<div class="space-y-1 mb-6">
		<h1 class="text-5xl">Inter</h1>
		<h2 class="text-[7rem]">Ag</h2>
	</div>
	<p class="text-5xl">
		ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
		abcdefghijklmnopqrstuvwxyz <br />
		0123456789 <br />
		!@#$%^&*()
	</p>
</div>

<div class="w-full m-10 p-4 inline-block overflow-hidden">
	<div class="grid grid-cols-min gap-10 overflow-x-scroll relative">
		{#each data as item}
			<div
				class=" col-span-4 sticky w-[calc(100vw-2rem)] left-0 mt-10 pb-2 border-b border-gray-200"
			>
				<div class="flex justify-between">
					<div class="flex">
						<div class="mr-4">{item.header.stylename}</div>
						<div class="border border-black rounded-full py-0.25 px-2">
							&lt;/&gt; class="{item.tailwind}"
						</div>
					</div>
					<div>{item.header.styledata}</div>
				</div>
			</div>
			<div class="flex flex-col items-start space-y-8 mr-20">
				<div class="{item.tailwind} untld-text-regular whitespace-nowrap">
					<p>{item.header.stylename}</p>
					<p>Regular</p>
				</div>
				<div class="border border-black rounded-full py-0.25 px-2">
					&lt;/&gt; class="untld-text-regular"
				</div>
			</div>
			<div class="flex flex-col items-start space-y-8 mr-20">
				<div class="{item.tailwind} untld-text-medium whitespace-nowrap">
					<p>{item.header.stylename}</p>
					<p>Medium</p>
				</div>
				<div class="border border-black rounded-full py-0.25 px-2">
					&lt;/&gt; class="untld-text-medium"
				</div>
			</div>
			<div class="flex flex-col items-start space-y-8 mr-20">
				<div class="{item.tailwind} untld-text-semibold whitespace-nowrap">
					<p>{item.header.stylename}</p>
					<p>Semibold</p>
				</div>
				<div class="border border-black rounded-full py-0.25 px-2">
					&lt;/&gt; class="untld-text-semibold"
				</div>
			</div>
			<div class="flex flex-col items-start space-y-8 mr-20">
				<div class="{item.tailwind} untld-text-bold whitespace-nowrap">
					<p>{item.header.stylename}</p>
					<p>Bold</p>
				</div>
				<div class="border border-black rounded-full py-0.25 px-2">
					&lt;/&gt; class="untld-text-bold"
				</div>
			</div>
		{/each}
	</div>
</div>
