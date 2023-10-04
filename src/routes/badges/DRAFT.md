# Badges usage

Either as

```svelte
<Badge {size} {outline} {icon} {color} {clickable} />
```

````js
type size = 'sm' | 'md' | 'lg'

type color = 'gray' | 'primary' | 'error' | 'warning' | 'success' | 'blue gray' | 'blue light' | 'blue' | 'indigo' | 'purple' | 'pink' | 'rosé' | 'orange'

type icon? =
		| { type: 'dot' }
        | { type: 'country'; leading?: string }
        // leading optional since we can provide a standard avatar icon
        | { type: 'avatar'; leading?: string }
        // leading optional since we can provide a standard close icon
        | { type: 'x-close'; trailing?: string }
        // leading optional since we can provide a standard country icon
		| { type: 'icon'; leading?: string; trailing?: string}
        | { type: 'icon-only'; leading: string }

type outline? = boolean

type clickable? = boolean

interface $$Props extends HTMLButtonAttributes {
        size: size
        color: color
		outline?: outline;
		icon?: icon;
        clickable?: boolean;
	}
```
```svelte
<script>
    import { BadgeWrapper, IconAtom, DotAtom } from "library"
</script>


<BadgeWrapper >
    <BadgeIconAtom slot="icon-left" class="" />
    <TextAtom />
    <!-- depending on the x-close or country prop, IconAtom can contain default url -->
    <!-- <BadgeIconAtom slot="icon-left" url={icon.trailing} class="" /> -->
    <!-- <DotAtom slot="icon-left" class="" /> -->
    <!-- Image icon is needed for now, since mask doesn't display images only icons -->
    <!-- <ImageIcon slot='icon-left' > -->
    <!-- <div slot="icon-left"></div> (alternative) -->
<BadgeWrapper>
```

```svelte BadgeWrapper
<button>
	<slot name="icon-left" />
	<slot />
	<slot name="icon-right" />
</button>
```

```svelte BadgeIconAtom
<script>
	export let url: string;
</script>

<span style="--badge-icon-url:url('{url}')" class="" />
```

`
- Icon trailing, leading and xclose are the same sizes
- Icon country and avatar are the same sizes.

### Change IconAtom or add a new BadgeIconAtom ?

Should we change the current Icon namings to `ButtonIconAtom`? Since there is a difference in props/context being passed between `BadgeIcons` and `ButtonIcons`, there is also a size difference and a style difference. Currently the `IconAtom` is getting the context from it's parent component mainly `destructive` and `hierarchy` are props a `BadgeIcon` won't have,

This would make the `IconAtom` relatively complex.
I do think we could use `DotAtom` within the Badge, since it's less complex

Small notice: Badges also don't seem to have a hover/focus/click style, even though there is a close button involved.

Some icons don't fall within the icons folder, added a new folder:
dummies:
- au.svg
- avatar.svg
````
