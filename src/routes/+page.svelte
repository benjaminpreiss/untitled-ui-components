<script lang="ts">
	import { css } from 'styled-system/css';
	import { button_buttonWrapper } from 'styled-system/recipes';
</script>

<div class="fixed inset-0 flex items-center justify-center flex-col">
	<span class="text-3xl font-bold underline"> Hello world! from tw </span>
	<span
		class={css({
			textStyle: 'untld_display_2xl',
			fontWeight: 'bold',
			textDecoration: 'underline',
			color: 'untld_yellow.300',
			shadow: 'untld_xs_focused_4px_secondary_gray_100'
		})}
	>
		Hello Panda!
	</span>
	<button class={button_buttonWrapper({ destructive: true, hierarchy: 'primary', size: '2xl' })}
		>Hello</button
	>
</div>
