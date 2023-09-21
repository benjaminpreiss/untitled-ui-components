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

<div
	class="flex flex-col items-start justify-start mt-[10.5rem] antialiased gap-16 pl-[9.31rem] text-untld-gray-900"
>
	<div class="space-y-1 mb-16">
		<h1 class="untld-display-lg untld-text-regular mb-4">Inter</h1>
		<h2 class="text-[7rem] untld-text-regular">Ag</h2>
	</div>
	<p class="untld-display-lg untld-text-regular">
		ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
		abcdefghijklmnopqrstuvwxyz <br />
		0123456789 <br />
		!@#$%^&*()
	</p>
</div>

<div class="w-full my-[15rem] inline-block overflow-hidden pl-[9.31rem]">
	<div class="grid grid-cols-min gap-10 overflow-x-scroll relative">
		{#each data as item}
			<div
				class=" col-span-4 sticky w-[calc(100vw-13rem)] left-0 pb-2 border-b border-untld-gray-300"
			>
				<div class="flex justify-between">
					<div class="flex">
						<div class="text-[1rem] leading-[1.5rem] untld-text-medium text-untld-gray-600 pr-2">
							{item.header.stylename}
						</div>
						<div
							class="border border-untld-gray-600 text-untld-gray-700 rounded-full py-0.25 px-2 untld-text-medium untld-text-sm"
						>
							&lt;/&gt; class="{item.tailwind}"
						</div>
					</div>
					<div class="untld-text-md untld-text-regular text-untld-gray-600">
						{item.header.styledata}
					</div>
				</div>
			</div>
			{@const badges = [
				{ class: 'untld-text-regular', text: 'Regular' },
				{ class: 'untld-text-medium', text: 'Medium' },
				{ class: 'untld-text-semibold', text: 'Semibold' },
				{ class: 'untld-text-bold', text: 'Bold' }
			]}
			{#each badges as badge}
				<div class="flex flex-col items-start space-y-8 mb-[5rem]">
					<div class="{item.tailwind} {badge.class} whitespace-nowrap text-untld-gray-900">
						<p>{item.header.stylename}</p>
						<p>{badge.text}</p>
					</div>
					<div
						class="border border-untld-gray-600 text-untld-gray-700 rounded-full py-0.25 px-2 untld-text-sm untld-text-medium"
					>
						&lt;/&gt; class="{badge.class}"
					</div>
				</div>
			{/each}
		{/each}
	</div>
</div>
