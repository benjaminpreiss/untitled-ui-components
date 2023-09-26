# Usage

Either as

```svelte
<Button {size} {hierarchy} {destructive} {icon} />
```

or in a custom manner

```svelte
<script>
    import {ButtonWrapper} from "library"
</script>

<ButtonWrapper class="[&&]:gap-3">
    <IconAtom slot="icon-left" class="" />
    <!-- <div slot="icon-left"></div> (alternative) -->
    <TextAtom />
<ButtonWrapper>
```
