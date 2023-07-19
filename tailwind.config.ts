import type { Config } from 'tailwindcss'

export default {
	experimental: {
		optimizeUniversalDefaults: true,
	},
	future: {
		disableColorOpacityUtilitiesByDefault: true,
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '28rem',
			md: '48rem',
			lg: '64rem',
			xl: '80rem',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				xl: '6rem',
			},
		},
		extend: {
			fontFamily: {
				sans: "'Futura PT', sans-serif",
				serif: "'Reckless Neue', serif",
			},
			colors: {
				stone: {
					100: '#F2F0EA',
					500: '#81736B',
				},
				cyan: {
					800: '#2D6370',
				},
				orange: {
					600: '#E95C0D',
				},
			},
		},
	},
} satisfies Config
