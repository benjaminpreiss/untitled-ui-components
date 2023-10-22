import { defineConfig } from '@pandacss/dev';
import { pandaPreset } from './src/lib/index';

export default defineConfig({
	prefix: 'panda',
	presets: [pandaPreset],
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {}
	},

	// The output directory for your css system
	outdir: 'styled-system'
});
