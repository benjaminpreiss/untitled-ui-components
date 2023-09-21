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
    const styles = {
        destructive: {
            primary: {
                coloring: 'bg-untld-primary-600 hover:bg-untld-primary-700 text-untld-base-white border-untld-primary-600 shadow-{color} focused:shadow-{color} disabled:bg-untld-primary-200 '
            }
            'secondary-gray': { 
                coloring: 'bg-untld-base-white text-untld-gray-700 border-untld-gray-300 shadow-{color} hover:bg-untld-gray-50 hover:text-untld-gray-800 focused:shadow-{color} disabled:bg-untld-base-white focused:shadow-{color} disabled:text-untld-gray-300'
            }
            'secondary-color': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'tertiary-gray': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'tertiary-color': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'link-gray': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'link-color': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
        } 
        notDestructive: {
            primary: {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'secondary-gray': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'secondary-color': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'tertiary-gray': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'tertiary-color': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'link-gray': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
            }
            'link-color': {
                coloring: 'bg-{color} text-{color} border-{color} shadow-{color} hover:bg-{color}'
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
        {!destructive
		? hierarchy === 'primary'
			? ''
			: hierarchy === 'secondary-gray'
			? ''
			: hierarchy === 'secondary-color'
			? ''
			: hierarchy === 'tertiary-gray'
			? ''
			: hierarchy === 'tertiary-color'
			? ''
			: hierarchy === 'link-gray'
			? '' // link-color below
			: ''
		: hierarchy === 'primary' && destructive === true
		? ''
		: hierarchy === 'secondary-gray' && destructive === true
		? ''
		: hierarchy === 'secondary-color' && destructive === true
		? ''
		: hierarchy === 'tertiary-gray' && destructive === true
		? ''
		: hierarchy === 'tertiary-color' && destructive === true
		? ''
		: hierarchy === 'link-gray' && destructive === true
		? '' // link-color below
		: 'bg-{color} hover:bg-{color} text-{color} border-{color} shadow-{color}'} 
        border border-radius-[0.5rem] border-solid shadow-sm focus:shadow-lg
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
