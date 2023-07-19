<script lang="ts">
	let className = ''
	export { className as class }
	export let data: PictureType
	export let loading: 'eager' | 'lazy' = 'lazy'
	export let decoding: 'auto' | 'sync' | 'async' = 'async'
	export let alt = ''
	$: ({ sources, img } = data)
</script>

<picture>
	{#each Object.entries(sources) as [format, source]}
		<source srcset="{source.map(({ src, w }) => `${src} ${w}w`).join(', ')}" type="image/{format}" sizes="100vw" />
	{/each}
	<img class="{className}" src="{img.src}" width="{img.w}" height="{img.h}" {loading} {decoding} alt="{alt ?? ''}" />
</picture>
