<script lang="ts">
	import { css } from 'styled-system/css';
</script>

<div class="fixed inset-0 flex items-center justify-center flex-col">
	<span class="text-3xl font-bold underline"> Hello world! from tw </span>
	<span
		class={css({
			textStyle: '3xl',
			fontWeight: 'bold',
			textDecoration: 'underline',
			color: 'untld_yellow.300'
		})}
	>
		Hello Panda!
	</span>
</div>
