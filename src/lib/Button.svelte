<script lang="ts">
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

    /* TODO: What colors for shadow and focused shadow?*/
    const styleColors = {
        destructive: {
            'primary': {
                coloring: 'bg-untld-primary-600 text-untld-base-white border-untld-primary-600 shadow-untld-{color} hover:bg-untld-primary-700 focused:shadow-untld-{color} disabled:bg-untld-primary-200 '
            }
            'secondary-gray': { 
                coloring: 'bg-untld-base-white text-untld-gray-700 border-untld-gray-300 shadow-untld-{color} hover:bg-untld-gray-50 hover:text-untld-gray-800 focused:shadow-untld-{color} disabled:text-untld-gray-300'
            }
            'secondary-color': {
                coloring: 'bg-untld-primary-50 text-untld-primary-700 border-untld-primary-50 shadow-untld-{color} hover:bg-untld-primary-100 hover:text-untld-primary-800 focused:shadow-untld-{color} disabled:bg-untld-primary-25 disabled:text-untld-primary-300'
            }
            'tertiary-gray': {
                coloring: 'text-untld-gray-600 shadow-untld-{color} hover:bg-untld-gray-50 hover:text-untld-gray-700 focused:shadow-untld-{color} disabled:text-untld-gray-300'
            }
            'tertiary-color': {
                coloring: 'text-untld-primary-700 shadow-untld-{color} hover:bg-untld-primary-50 hover:text-untld-primary-800 focused:shadow-untld-{color} disabled:text-untld-gray-300'
            }
            'link-gray': {
                coloring: 'text-untld-gray-600 shadow-untld-{color} hover:text-untld-gray-700 disabled:text-untld-gray-300'
            }
            'link-color': {
                coloring: 'text-untld-primary-700 shadow-untld-{color} hover:text-untld-primary-800 disabled:text-untld-gray-300'
            }
        } 
        nonDestructive: {
            'primary': {
                coloring: 'bg-untld-error-600 text-untld-base-white border-untld-error-600 shadow-untld-{color} hover:bg-untld-error-700 focused:shadow-untld-{color} disabled:bg-untld-error-200 '
            }
            'secondary-gray': { 
                coloring: 'bg-untld-base-white text-untld-error-700 border-untld-error-300 shadow-untld-{color} hover:bg-untld-error-50 hover:text-untld-error-800 focused:shadow-untld-{color} disabled:text-untld-error-300'
            }
            'secondary-color': {
                coloring: 'bg-untld-error-50 text-untld-error-700 border-untld-error-50 shadow-untld-{color} hover:bg-untld-error-100 hover:text-untld-error-800 focused:shadow-untld-{color} disabled:bg-untld-error-25 disabled:text-untld-error-300'
            }
            'tertiary-gray': {
                coloring: 'text-untld-error-600 shadow-untld-{color} hover:bg-untld-error-50 hover:text-untld-error-700 focused:shadow-untld-{color} disabled:text-untld-error-300'
            }
            'tertiary-color': {
                coloring: 'text-untld-error-700 shadow-untld-{color} hover:bg-untld-error-50 hover:text-untld-error-800 focused:shadow-untld-{color} disabled:text-untld-error-300'
            }
            'link-gray': {
                coloring: 'text-untld-error-700 shadow-untld-{color} hover:text-untld-error-800 disabled:text-untld-error-300'
            }
            'link-color': {
                coloring: 'text-untld-error-700 shadow-untld-{color} hover:text-untld-error-800 disabled:text-untld-error-300'
            }
        }
    }

    const stylePaddings = {
        'icon': {
            'sm': {
                padding: 'px-[0.875rem] py-[0.5rem]'
            }
            'md': {
                padding: 'px-[1rem] py-[0.625rem]'
            }
            'lg': {
                padding: 'px-[1.125rem] py-[0.625rem]'
            }
            'xl': {
                padding: 'px-[1.25rem] py-[0.75rem]'
            }
            '2xl': {
                padding: 'px-[1.75rem] py-[1rem]'
            }
        }
        'icon-only': {
            'sm': {
                padding: 'p-[0.5rem]'
            }
            'md': {
                padding: 'p-[0.625rem]'
            }
            'lg': {
                padding: 'p-[0.75rem]'
            }
            'xl': {
                padding: 'p-[0.875rem]'
            }
            '2xl': {
                padding: 'p-[1rem]'
            }
        }
        'dot': {
            'sm': {
                padding: 'px-[0.875] py-[0.5rem]'
            }
            'md': {
                padding: 'px-[1rem] py-[0.625rem]'
            } 
            'lg': {
                padding: 'px-[1.125rem] py-[0.625rem]'
            }
            'xl': {
                padding: 'px-[1.25rem] py-[0.75rem]'
            }
            '2xl': {
                padding: 'px-[1.75rem] py-[1rem]'
            }
        }
    }
</script>

<!--  TODO add correct: colors,   -->
<button
	class="
        {size === 'sm'
		? 'h-36'
		: size === 'md'
		? 'h-40'
		: size === 'lg'
		? 'h-44'
		: size === 'xl'
		? 'h-48'
		: size === '2xl'
		? 'h-60'
		: ''}
        {styleColors[destructive ? 'destructive' : 'nonDestructive'][hierarchy].coloring}
        {stylePaddings[icon ? 'icon' : icon ? 'icon-only' : 'dot'][size].padding}
        border border-radius-[0.5rem] border-solid shadow-sm focus:shadow-lg
        inline-flex justify-center items-center gap-[0.5rem]
    "
>
	<!-- TODO finish the component structure and the classes for the structure -->
	<div>
		<div
			class="
            {icon.type === 'icon'
				? ''
				: icon.type === 'icon-only'
				? '' // dot below
				: ''}
        "
		/>
		<p
			class="
                {icon.type === 'icon'
				? ''
				: icon.type === 'icon-only'
				? 'hidden' // dot below
				: ''} 
            "
		>
			example text
		</p>
		<div
			class="
            {icon.type === 'icon'
				? ''
				: icon.type === 'icon-only'
				? '' // dot below
				: ''}
        "
		/>
	</div>
</button>
