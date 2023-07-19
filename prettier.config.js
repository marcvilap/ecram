/** @type {import('prettier').Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	printWidth: 120,
	semi: false,
	arrowParens: 'avoid',
	proseWrap: 'never',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	svelteStrictMode: true,
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export default config
