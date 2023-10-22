# untitled-ui-components

## Getting started

THIS PROJECT USES `pnpm`!
Make sure you have properly installed `pnpm`.

1. Clone repo
2. `pnpm install`
3. `pnpm dev`

## Usage

### Installation

All you need to do is:

- install our library
- Set up pandacss with your framework
- Include our preset in the pandacss config
- Add you overwrites / extends to the pandacss config.

### Typography

By default, the design system sets the untld font (Inter) on the page body (html element).
That way, Inter will be the default font used and doesn't have to be specified anymore.

#### Text Styles

We expose the following textStyles for untitled UI display properties:

- `untld_display_2xl`
- `untld_display_xl`
- `untld_display_lg`
- `untld_display_md`
- `untld_display_sm`
- `untld_display_xs`,

... And for untitled UI text properties:

- `untld_text_xl`
- `untld_text_lg`
- `untld_text_md`
- `untld_text_sm`
- `untld_text_xs`

Which can then be used as follows:

```svelte
<script>
	import { css } from 'styled-system/css';
</script>

<p class={css({ textStyle: 'untld_display_xl' })}>
	This is a paragraph from Panda with the body text style.
</p>
```

#### Font weight

the font weight can be separately specified via the panda built in fontWeight property:

```svelte
<div class={css({ fontWeight: 'bold' })} />
```

### Colors

We offer all shades from untitled UI as colors here.

Base colors:

- `untld_black`
- `untld_white`

Primary colors:

- `untld_gray`
- `untld_brand`
- `untld_error`
- `untld_warning`
- `untld_success`

Secondary colors:

- `untld_gray_blue`
- `untld_gray_cool`
- `untld_gray_modern`
- `untld_gray_neutral`
- `untld_gray_iron`
- `untld_gray_true`
- `untld_gray_warm`
- `untld_moss`
- `untld_green_light`
- `untld_green`
- `untld_teal`
- `untld_cyan`
- `untld_blue_light`
- `untld_blue`
- `untld_blue_dark`
- `untld_indigo`
- `untld_violet`
- `untld_purple`
- `untld_fuchsia`
- `untld_pink`
- `untld_rosé`
- `untld_orange_dark`
- `untld_orange`
- `untld_yellow`

These can then be used as follows:

```svelte
<script>
	import { css } from 'styled-system/css';
</script>

<p class={css({ backgroundColor: 'untld_brand.600' })}>
	This is a paragraph from Panda with the body text style.
</p>
```
