<script lang="ts">
	import { browser } from '$app/environment';
	import { colors } from '$lib/tailwindPlugin.js';
	import { draggable } from '../../utils/draggable.js';
	import animationObserver from '../../utils/animationObserver.js';
	import code02 from '$lib/assets/icons/development/code-02.svg?url';

	type ColorDescription = {
		title: string;
		description: string;
	};
	type ColorGroup = {
		[colorName: string]: ColorDescription;
	};

	export const colorDescriptions: { base: ColorGroup; primary: ColorGroup; secondary: ColorGroup } =
		{
			base: {
				Base: {
					title: 'Base',
					description:
						'These are base black and white color styles to quickly swap out if you need to.'
				}
			},
			primary: {
				Gray: {
					title: 'Gray',
					description:
						'Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.'
				},
				Brand: {
					title: 'Brand',
					description:
						'The brand color is your "brand" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can define the overall feel and can elicit emotion.'
				},
				Error: {
					title: 'Error',
					description:
						'Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.'
				},
				Warning: {
					title: 'Warning',
					description: `Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users' attention.`
				},
				Success: {
					title: 'Success',
					description: `Success colors communicate a positive action, positive trend, or a successful confirmation. If you're using green as your brand color, it can be helpful to introduce a different hue for your success green.`
				}
			},
			secondary: {
				'Gray blue': {
					title: 'Gray Blue',
					description: 'Description for the Gray Blue color group...'
				},
				'Gray cool': {
					title: 'Gray Cool',
					description: 'Description for the Gray Cool color group...'
				},
				'Gray modern': {
					title: 'Gray Modern',
					description: 'Description for the Gray Modern color group...'
				},
				'Gray neutral': {
					title: 'Gray Neutral',
					description: 'Description for the Gray Neutral color group...'
				},
				'Gray iron': {
					title: 'Gray Iron',
					description: 'Description for the Gray Iron color group...'
				},
				'Gray true': {
					title: 'Gray True',
					description: 'Description for the Gray True color group...'
				},
				'Gray warm': {
					title: 'Gray Warm',
					description: 'Description for the Gray Warm color group...'
				},
				Moss: {
					title: 'Moss',
					description: 'Description for the Moss color group...'
				},
				Green: {
					title: 'Green',
					description: 'Description for the Green color group...'
				},
				'Green light': {
					title: 'Green light',
					description: 'Description for the Green light color group...'
				},
				Teal: {
					title: 'Teal',
					description: 'Description for the Teal color group...'
				},
				Cyan: {
					title: 'Cyan',
					description: 'Description for the Cyan color group...'
				},
				'Blue light': {
					title: 'Blue Light',
					description: 'Description for the Blue Light color group...'
				},
				Blue: {
					title: 'Blue',
					description: 'Description for the Blue color group...'
				},
				'Blue dark': {
					title: 'Blue Dark',
					description: 'Description for the Blue Dark color group...'
				},
				Indigo: {
					title: 'Indigo',
					description: 'Description for the Indigo color group...'
				},
				Violet: {
					title: 'Violet',
					description: 'Description for the Violet color group...'
				},
				Purple: {
					title: 'Purple',
					description: 'Description for the Purple color group...'
				},
				Fuchsia: {
					title: 'Fuchsia',
					description: 'Description for the Fuchsia color group...'
				},
				Pink: {
					title: 'Pink',
					description: 'Description for the Pink color group...'
				},
				Rosé: {
					title: 'Rosé',
					description: 'Description for the Rosé color group...'
				},
				'Orange dark': {
					title: 'Orange Dark',
					description: 'Description for the Orange Dark color group...'
				},
				Orange: {
					title: 'Orange',
					description: 'Description for the Orange color group...'
				},
				Yellow: {
					title: 'Yellow',
					description: 'Description for the Yellow color group...'
				}
			}
		};
	// this functions sets one of the app colors to the chosen color, and scrolls to them
	function setNewColors(
		shades: {
			25: string;
			50: string;
			100: string;
			200: string;
			300: string;
			400: string;
			500: string;
			600: string;
			700: string;
			800: string;
			900: string;
		},
		colorGroup: string,
		type: string
	) {
		colorGroup = colorGroup.toLocaleLowerCase().replace(' ', '-');
		const computedStyles = getComputedStyle(document.documentElement);
		const elementToScrollTo = document.querySelector('#' + type.toLowerCase());
		if (elementToScrollTo) {
			elementToScrollTo.scrollIntoView({
				behavior: 'smooth', // for a smooth scrolling effect
				block: 'center' // aligns the top of the element with the top of the viewport
			});
		}
		Object.keys(shades).forEach((shade) => {
			const value = computedStyles.getPropertyValue(`--color-untld-${colorGroup}-${shade}`).trim();
			document.documentElement.style.setProperty(`--color-untld-${type}-${shade}`, value);
		});
	}
</script>

{#if browser}
	<div class="h-full pl-[9.31rem] w-full overflow-hidden py-[10.5rem]">
		<div
			use:animationObserver={{
				animation: 'animate-fadeInSlow',
				threshold: 0.1
			}}
			class="max-w-4xl my-12 opacity-0"
		>
			<h3 class="text-untld-gray-900 untld-display-xs untld-text-semibold">Brand colors</h3>
			<span class="untld-text-lg untld-text-regular antialiased text-untld-gray-600"
				>These are the main colors that make up the majority of the colors used in the design
				system.</span
			>
		</div>

		<div
			class="grid gap-4 mr-4 grid-cols-3 w-fit mb-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
		/>
		<div
			class="overflow-x-auto overflow-y-hidden lg:overflow-hidden no-scrollbar snap-x snap-mandatory pb-12"
		>
			<div class="grid gap-x-6 gap-y-20 mt-12 mr-4 grid-cols-colors snap-start min-w-max">
				<div
					use:animationObserver={{
						animation: 'animate-fadeInFromTop',
						threshold: 0.1
					}}
					class="non-draggable col-span-2 opacity-0 mr-8 pr-10 pb-6 w-[27.5rem] sticky space-y-1 z-10 bg-untld-white left-0"
				>
					<h4 class="untld-text-lg untld-text-semibold text-untld-gray-900">
						{colorDescriptions.base.Base?.title ?? ''}
					</h4>
					<p class="untld-text-md untld-text-regular text-untld-gray-600">
						{colorDescriptions.base.Base?.description ?? ''}
					</p>
					<div class=" h-full bg-untld-white w-full absolute" />
				</div>

				{#each Object.entries(colors.base) as [color, hexCode], innerIndex (innerIndex)}
					<div
						use:animationObserver={{
							animation: 'animate-fadeInFromTop',
							threshold: 0.1
						}}
						style="animation-delay: {innerIndex * 0.025}s;"
						class="w-[15rem] -ml-10 opacity-0 delay-500 h-[9.75rem] col-span-1 snap-start shadow-untld-lg rounded-md relative"
					>
						<div
							style="background-color:rgb(var(--color-untld-{color
								.replace(/\s+/g, '-')
								.toLocaleLowerCase()}))"
							class="w-full rounded-t-md h-[52%]"
						/>
						<div class="flex flex-col h-[48%] p-2 justify-end">
							<span class="untld-text-lg text-untld-gray-900 untld-text-medium">
								{color}
							</span>
							<span class="untld-text-md text-untld-gray-600 untld-text-regular">
								{hexCode}
							</span>
						</div>

						<div class="w-full mt-6">
							<button
								on:click={() =>
									navigator.clipboard.writeText(
										`untld-${color.replace(/\s+/g, '-').toLocaleLowerCase()}`
									)}
								class="flex peer space-y-0 space-x-2 items-center untld-text-medium untld-text-xs my-2 bg-untld-white text-untld-gray-700 border-untld-gray-700 px-2 border-[1.5px] rounded-full"
							>
								<img class="w-3 h-3" src={code02} alt="icon" />
								<span>{`tailwind: 'untld-${color.replace(/\s+/g, '-').toLocaleLowerCase()}'`}</span>
							</button>
							<!-- TODO exchange temporary copy button -->
							<div
								class="transition-opacity right-0 -translate-y-full peer-active:transition-none duration-0 transition-opacity-transform delay-1000 peer-active:opacity-100 peer-active:transition-opacity-transform opacity-0 absolute top-full px-2 untld-text-medium bg-untld-white text-untld-gray-700 border-untld-gray-700 untld-text-xs border-[1.5px] rounded-full
                                 whitespace-nowrap"
							>
								Copied!
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div
			use:draggable
			class="active:cursor-grabbing overflow-x-auto no-scrollbar snap-x snap-mandatory pb-28"
		>
			<div class="grid gap-x-6 gap-y-20 mt-8 mr-4 grid-cols-colors snap-start min-w-max">
				{#each Object.entries(colors.primary) as [colorGroup, shades], outerIndex (outerIndex)}
					<div
						id={colorGroup.toLowerCase()}
						class="non-draggable active:cursor-default col-span-2 opacity-100 mr-8 pr-10 pb-6 w-[27.5rem] sticky space-y-1 z-30 left-0"
					>
						<div class="w-full h-full bg-untld-white py-32 absolute" />
						<div
							use:animationObserver={{
								animation: 'animate-fadeInFromTop',
								threshold: 0.1
							}}
							style="animation-delay: {0.05}s;"
							class="relative w-full h-full opacity-0"
						>
							<h4 class="untld-text-lg untld-text-semibold text-untld-gray-900">
								{colorDescriptions.primary[colorGroup]?.title ?? ''}
							</h4>
							<p class="untld-text-md untld-text-regular text-untld-gray-600">
								{colorDescriptions.primary[colorGroup]?.description ?? ''}
							</p>
						</div>
					</div>

					{#each Object.entries(shades) as [shade, hexCode], innerIndex (innerIndex)}
						<!-- TODO exchange small test animation -->
						<div
							use:animationObserver={{
								animation: 'animate-fadeIn',
								threshold: 0.01
							}}
							style="animation-delay: {(innerIndex / 2) * 0.015}s;"
							class="{shade === '600'
								? 'w-full'
								: 'w-[15rem]'} -ml-10 opacity-0 h-[9.75rem] col-span-1 snap-start shadow-untld-lg rounded-md relative"
						>
							<div
								style="background-color:rgb(var(--color-untld-{colorGroup
									.replace(/\s+/g, '-')
									.toLocaleLowerCase()}-{shade}))"
								class="w-full rounded-t-md h-[52%]"
							/>
							<div class="flex flex-col h-[48%] p-2 justify-end">
								<span class="untld-text-lg text-untld-gray-900 untld-text-medium">
									{shade}
								</span>
								<span class="untld-text-md text-untld-gray-600 untld-text-regular">
									{hexCode}
								</span>
							</div>
							{#if shade === '600'}
								<div
									class="absolute top-0 right-0 m-2 w-3 h-3 rounded-full ring-untld-white/40 bg-untld-white ring-2 ring-offset-0"
								/>
							{/if}
							<div class="w-full mt-6">
								<button
									on:click={() =>
										navigator.clipboard.writeText(
											`untld-${colorGroup.replace(/\s+/g, '-').toLocaleLowerCase()}-${shade}`
										)}
									class="flex space-y-0 peer space-x-2 items-center untld-text-medium untld-text-xs my-2 bg-untld-white text-untld-gray-700 border-untld-gray-700 px-2 border-[1.5px] rounded-full"
								>
									<img class="w-3 h-3" src={code02} alt="icon" />
									<span
										>{`tailwind: 'untld-${colorGroup
											.replace(/\s+/g, '-')
											.toLocaleLowerCase()}-${shade}'`}</span
									>
								</button>
								<!-- TODO exchange temporary copy button -->
								<div
									class="transition-opacity right-0 -translate-y-full peer-active:transition-none duration-0 transition-opacity-transform delay-1000 peer-active:opacity-100 peer-active:transition-opacity-transform opacity-0 absolute top-full px-2 untld-text-medium bg-untld-white text-untld-gray-700 border-untld-gray-700 untld-text-xs border-[1.5px] rounded-full
                                 whitespace-nowrap"
								>
									Copied!
								</div>
							</div>
						</div>
					{/each}
				{/each}
			</div>
		</div>

		<div class="max-w-4xl my-14 space-y-1">
			<h3
				use:animationObserver={{
					animation: 'animate-fadeInFromTop',
					threshold: 0.5
				}}
				class="text-untld-gray-900 opacity-0 untld-display-xs untld-text-semibold"
			>
				Secondary colors
			</h3>
			<p
				use:animationObserver={{
					animation: 'animate-fadeInSlow',
					threshold: 0.5
				}}
				class="untld-text-lg opacity-0 untld-text-regular antialiased"
			>
				Along with brand colors, it's helpful to have a selection of secondary colors to use in
				components such as pills, alerts and labels. These secondary colors should be used sparingly
				or as accents, while the brand color(s) should take precedence.
			</p>
		</div>
		<div
			use:draggable
			class="active:cursor-grabbing overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory pb-12"
		>
			<div class="grid gap-x-6 gap-y-20 mt-12 mr-4 grid-cols-colors snap-start min-w-max">
				{#each Object.entries(colors.secondary) as [colorGroup, shades], outerIndex (outerIndex)}
					<div
						id={colorGroup.toLowerCase()}
						class="non-draggable active:cursor-default col-span-2 opacity-100 mr-8 pr-10 pb-6 w-[27.5rem] sticky space-y-1 z-30 left-0"
					>
						<div class="w-full h-full bg-untld-white py-32 absolute" />

						<div
							use:animationObserver={{
								animation: 'animate-fadeInFromTop',
								threshold: 0.1
							}}
							style="animation-delay: {0.05}s;"
							class="relative w-full h-full opacity-0"
						>
							<h4 class="untld-text-lg untld-text-semibold text-untld-gray-900">
								{colorDescriptions.secondary[colorGroup]?.title ?? ''}
							</h4>
							<p class="untld-text-md untld-text-regular text-untld-gray-600">
								{colorDescriptions.secondary[colorGroup]?.description ?? ''}
							</p>
							<!-- TODO exchange temporary menu -->
							<div class="absolute left-0 bottom-0">
								<div class="relative group inline-block">
									<!-- TODO exchange Main Button -->
									<div class="group bg-untld-white untld-text-sm text-untld-gray-600 py-2">
										set color as:
									</div>
									<!-- TODO exchange temporary Dropdown Menu -->
									<div class="w-full h-1 bg-transparent" />
									<div
										class={`group-hover:block hidden peer-hover:block group hover:block absolute left-0 rounded-md shadow-untld-lg `}
									>
										<div class=" flex" role="menu">
											{#each ['gray', 'brand', 'warning', 'error', 'success'] as colorType}
												<button
													class="block px-4 py-2 untld-text-sm text-untld-gray-600 hover:text-untld-white hover:bg-untld-gray-900"
													role="menuitem"
													on:click={() => setNewColors(shades, colorGroup, colorType)}
												>
													{colorType.charAt(0).toUpperCase() + colorType.slice(1)}
												</button>
											{/each}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{#each Object.entries(shades) as [shade, hexCode], innerIndex (innerIndex)}
						<div
							use:animationObserver={{
								animation: 'animate-fadeIn',
								threshold: 0.01
							}}
							style="animation-delay: {(innerIndex / 2) * 0.0075}s;"
							class="{shade === '600'
								? 'w-full'
								: 'w-[15rem]'} -ml-10 opacity-0 delay-500 h-[9.75rem] col-span-1 snap-start shadow-untld-lg rounded-md relative"
						>
							<div
								style="background-color:rgb(var(--color-untld-{colorGroup
									.replace(/\s+/g, '-')
									.toLocaleLowerCase()}-{shade}))"
								class="w-full rounded-t-md h-[52%]"
							/>
							<div class="flex flex-col h-[48%] p-2 justify-end">
								<span class="untld-text-lg text-untld-gray-900 untld-text-medium">
									{shade}
								</span>
								<span class="untld-text-md text-untld-gray-600 untld-text-regular">
									{hexCode}
								</span>
							</div>
							{#if shade === '600'}
								<div
									class="absolute top-0 right-0 m-2 w-3 h-3 rounded-full ring-untld-white/40 bg-untld-white ring-2 ring-offset-0"
								/>
							{/if}
							<div class="w-full mt-6">
								<button
									on:click={() =>
										navigator.clipboard.writeText(
											`untld-${colorGroup.replace(/\s+/g, '-').toLocaleLowerCase()}-${shade}`
										)}
									class="flex space-y-0 flex-row items-center justify-center peer space-x-2 untld-text-medium bg-untld-white text-untld-gray-700 border-untld-gray-700 px-2 untld-text-xs border-[1.5px] rounded-full"
								>
									<img class="w-3 h-3" src={code02} alt="icon" />
									<span
										>{`tailwind: 'untld-${colorGroup
											.replace(/\s+/g, '-')
											.toLocaleLowerCase()}-${shade}'`}</span
									>
								</button>
								<!-- TODO exchange temporary copy button -->
								<div
									class="transition-opacity right-0 -translate-y-full peer-active:transition-none duration-0 transition-opacity-transform delay-1000 peer-active:opacity-100 peer-active:transition-opacity-transform opacity-0 absolute top-full px-2 untld-text-medium bg-untld-white text-untld-gray-700 border-untld-gray-700 untld-text-xs border-[1.5px] rounded-full
                             whitespace-nowrap"
								>
									Copied!
								</div>
							</div>
						</div>
					{/each}
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.grid-cols-colors {
		grid-template-columns: 10rem /* 160px */ repeat(8, minmax(0, 1fr)) 16rem /* 256px */ repeat(
				3,
				minmax(0, 1fr)
			);
	}
</style>
