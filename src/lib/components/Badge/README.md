# Badges usage

Either as

```svelte
<Badge {size} {outline} {icon} {color} />
```

````js
type size = 'sm' | 'md' | 'lg'

type color = 'gray' | 'primary' | 'error' | 'warning' | 'success' | 'blue gray' | 'blue light' | 'blue' | 'indigo' | 'purple' | 'pink' | 'rosé' | 'orange'

type icon? =
	| { type: 'dot' }
    | { type: 'image'; leading: string }
    | { type: 'x-close'; trailing?: string, onClick: MouseEventHandler<HTMLButtonElement> }
    | { type: 'icon'; leading: string; trailing?: string }
    | { type: 'icon'; leading?: string; trailing: string }
    | { type: 'icon-only'; leading: string }

type outline? = boolean

interface $$Props extends HTMLButtonAttributes {
        size: size
        color: color
		outline?: outline;
		icon?: icon;
        onClick?: (() => void ) | undefined
	}
```
```svelte
<script>
    import { BadgeWrapper, IconAtom, DotAtom, ImageAtom, TextAtom, XcloseAtom } from "library"
</script>

<BadgeWrapper>
    <IconAtom slot="icon-left" class="" url="" />
    <!-- <IconAtom slot="icon-left" url="url" class="" /> -->
    <!-- <DotAtom slot="icon-left" class="" /> -->
    <!-- <ImageAtom slot='icon-left' url="" > -->
    <!-- <div slot="icon-left"></div> (alternative) -->
    <TextAtom />
    <!-- <XcloseAtom {onClick} slot="icon-right" url="" /> -->
    <!-- <IconAtom slot="icon-right" url="url" class="" /> -->
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
