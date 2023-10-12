# Colors and theming in our library

We build a tailwind plugin to extend the tailwind config with our own color styles: https://tailwindcss.com/docs/plugins#extending-the-configuration

## Using single colors

Define the desired color on a property:

```html
<div class="text-untitled-brand-500"></div>
<div class="text-untitled-blue-light-500"></div>
```

## How colors are defined in our theme

We expose a tailwindPlugin.ts, that we require our devs to add to the tailwind config.
Within the plugin we set all the colors named `untitled-<color-name>-<intensity>`.

Then, a user can override these themes by setting the `theme.extend.colors.untitled-<color-name>.<intensity>` properties to his whishes.
