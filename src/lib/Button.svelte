<script lang="ts">
	import dotIcon from '$lib/assets/icons/_Dot.svg?url';
	type size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	type hierarchy =
		| 'primary'
		| 'secondary-gray'
		| 'secondary-color'
		| 'tertiary-gray'
		| 'tertiary-color'
		| 'link-gray'
		| 'link-color';
	type icon =
		| { type: 'dot' }
		| { type: 'icon-only'; leading: string }
		| { type: 'icon'; leading?: string; trailing?: string };

	export let size: size;
	export let hierarchy: hierarchy = 'primary';
	export let destructive: boolean = false;
	export let icon: icon;

	/* TODO: Add boxshadow colors and sizes for all and for focused */
	const styleColors = {
		nonDestructive: {
			primary: {
				coloring:
					'bg-untld-primary-600 text-untld-white border-untld-primary-600 hover:bg-untld-primary-700 disabled:bg-untld-primary-200'
			},
			'secondary-gray': {
				coloring:
					'bg-untld-white text-untld-gray-700 border-untld-gray-300 hover:bg-untld-gray-50 hover:text-untld-gray-800 disabled:text-untld-gray-300'
			},
			'secondary-color': {
				coloring:
					'bg-untld-primary-50 text-untld-primary-700 border-untld-primary-50 hover:bg-untld-primary-100 hover:text-untld-primary-800 disabled:bg-untld-primary-25 disabled:text-untld-primary-300'
			},
			'tertiary-gray': {
				coloring:
					'text-untld-gray-600 hover:bg-untld-gray-50 hover:text-untld-gray-700 disabled:text-untld-gray-300'
			},
			'tertiary-color': {
				coloring:
					'text-untld-primary-700 hover:bg-untld-primary-50 hover:text-untld-primary-800 disabled:text-untld-gray-300'
			},
			'link-gray': {
				coloring: 'text-untld-gray-600 hover:text-untld-gray-700 disabled:text-untld-gray-300'
			},
			'link-color': {
				coloring: 'text-untld-primary-700 hover:text-untld-primary-800 disabled:text-untld-gray-300'
			}
		},
		destructive: {
			primary: {
				coloring:
					'bg-untld-error-600 text-untld-white border-untld-error-600 hover:bg-untld-error-700 disabled:bg-untld-error-200'
			},
			'secondary-gray': {
				coloring:
					'bg-untld-white text-untld-error-700 border-untld-error-300 hover:bg-untld-error-50 hover:text-untld-error-800 disabled:text-untld-error-300'
			},
			'secondary-color': {
				coloring:
					'bg-untld-error-50 text-untld-error-700 border-untld-error-50 hover:bg-untld-error-100 hover:text-untld-error-800 disabled:bg-untld-error-25 disabled:text-untld-error-300'
			},
			'tertiary-gray': {
				coloring:
					'text-untld-error-600 hover:bg-untld-error-50 hover:text-untld-error-700 disabled:text-untld-error-300'
			},
			'tertiary-color': {
				coloring:
					'text-untld-error-700 hover:bg-untld-error-50 hover:text-untld-error-800 disabled:text-untld-error-300'
			},
			'link-gray': {
				coloring: 'text-untld-error-700 hover:text-untld-error-800 disabled:text-untld-error-300'
			},
			'link-color': {
				coloring: 'text-untld-error-700 hover:text-untld-error-800 disabled:text-untld-error-300'
			}
		}
	};

	const stylePaddings = {
		icon: {
			sm: {
				padding: 'px-[0.875rem] py-[0.5rem]'
			},
			md: {
				padding: 'px-[1rem] py-[0.625rem]'
			},
			lg: {
				padding: 'px-[1.125rem] py-[0.625rem]'
			},
			xl: {
				padding: 'px-[1.25rem] py-[0.75rem]'
			},
			'2xl': {
				padding: 'px-[1.75rem] py-[1rem]'
			}
		},
		'icon-only': {
			sm: {
				padding: 'p-[0.5rem]'
			},
			md: {
				padding: 'p-[0.625rem]'
			},
			lg: {
				padding: 'p-[0.75rem]'
			},
			xl: {
				padding: 'p-[0.875rem]'
			},
			'2xl': {
				padding: 'p-[1rem]'
			}
		},
		dot: {
			sm: {
				padding: 'px-[0.875] py-[0.5rem]'
			},
			md: {
				padding: 'px-[1rem] py-[0.625rem]'
			},
			lg: {
				padding: 'px-[1.125rem] py-[0.625rem]'
			},
			xl: {
				padding: 'px-[1.25rem] py-[0.75rem]'
			},
			'2xl': {
				padding: 'px-[1.75rem] py-[1rem]'
			}
		}
	};

	/* TODO: check if heights are automatically set to the right heiht with the given text-size and padding, if so , delete commented heights */
	const styleSizes = {
		sm: {
			/* height: 'h-36', */
			text: 'untld-text-sm'
		},
		md: {
			/* height: 'h-40', */
			text: 'untld-text-sm'
		},
		lg: {
			/* height: 'h-44', */
			text: 'untld-text-md'
		},
		xl: {
			/* height: 'h-48', */
			text: 'untld-text-md'
		},
		'2xl': {
			/* height: 'h-60', */
			text: 'untld-text-lg'
		}
	};
</script>

<button
	class="
    {styleColors[destructive ? 'destructive' : 'nonDestructive'][hierarchy].coloring}
    {stylePaddings[icon ? 'icon' : icon ? 'icon-only' : 'dot'][size].padding}
    border rounded-[0.5rem] border-solid shadow-sm focus:shadow-lg
    inline-flex justify-center items-center gap-[0.5rem]"
>
	<!-- TODO: add the correct urls for the icons (probably dynamic based on chosen icon) and dot (static) -->
	<div
		style={`background-image: url('${icon.type === 'dot' ? dotIcon : icon.leading ?? ''}');`}
		class="
		bg-contain
        {icon.type === 'dot'
			? 'h-[0.625rem] w-[0.625rem]'
			: icon.leading
			? size === '2xl'
				? 'h-[1.5rem] w-[1.5rem]'
				: 'h-[1.25rem] w-[1.25rem]'
			: 'hidden'}"
	/>
	<p
		class="
            untld-text-regular
            {icon.type === 'icon-only' ? 'hidden' : ''}
            {styleSizes[size].text}
        "
	>
		<slot />
	</p>
	<div
		style={`background-image: url('${
			icon.type === 'dot' || icon.type === 'icon-only' ? '' : icon.trailing ?? ''
		}');`}
		class="
		bg-contain
        {icon.type === 'icon'
			? icon.trailing
				? size === '2xl'
					? 'h-[1.5rem] w-[1.5rem]'
					: 'h-[1.25rem] w-[1.25rem]'
				: 'hidden'
			: 'hidden'}"
	/>
</button>
