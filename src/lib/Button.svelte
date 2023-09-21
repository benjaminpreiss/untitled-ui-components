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
	type state = 'default' | 'hover' | 'focused' | 'disabled';

	export let size: size;
	export let hierarchy: hierarchy = 'primary';
	export let destructive: boolean = false;
	export let icon: icon;
	export let state: state = 'default';
</script>

<!--  TODO add correct: colors,   -->
<button
	class="
        {`h-${
            size === 'sm'
            ? '36'
            : size === 'md'
            ? '40'
            : size === 'lg'
            ? '44'
            : size === 'xl'
            ? '48'
            : size === '2xl'
            ? '60'
            : ''
        }`}
        {{	hierarchy === 'primary' && destructive === 'false'          // where do I define the colors used? which colors do I use? Do I use color variables?
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'secondary-gray' && destructive === false
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'secondary-color' && destructive === false
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'tertiary-gray' && destructive === false
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'tertiary-color' && destructive === false
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'link-gray' && destructive === false
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'link-color' && destructive === false
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'primary' && destructive === true
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'secondary-gray' && destructive === true
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'secondary-color' && destructive === true
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'tertiary-gray' && destructive === true
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'tertiary-color' && destructive === true
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'link-gray' && destructive === true
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'link-color' && destructive === true
            ? 'bg-{color} text-{color} border-{color} shadow-{color}'
            : hierarchy === 'primary' && destructive === false
        }}
        border border-radius-[0.5rem] border-solid shadow-sm hover:shadow-lg
    "
>
    <div 
        class="
        {{ icon === 'icon' && (leading || trailing) ? 'urls' :
           icon === 'icon-only' && leading === '' ? 'url' :
           icon === 'dot' ? '' : 'icon' }}
    "
    >
        <p 
            class="
                {{ icon === 'icon' ? '' : icon === 'icon-only' ? 'hidden' : icon === 'dot' ? '' : icon === 'icon'}}
            "
        >
            example text
        </p>
    </div>
</button>
