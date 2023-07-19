<script lang="ts">
	import type { Action } from 'svelte/action'
	import { tweened } from 'svelte/motion'

	export let num: number
	export let description: string
	export let start = ''
	export let end = ''

	const counter = tweened(0, { duration: 2000 })

	const trigger = (node => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					counter.set(num)
				} else {
					counter.set(0)
				}
			})
		})
		observer.observe(node)
		return {
			destroy: () => observer.disconnect(),
		}
	}) satisfies Action
</script>

<div use:trigger>
	<div class="relative ml-8 flex items-center rounded-2xl bg-stone-100 p-8 pl-12 lg:pl-24">
		<span
			class="absolute -left-8 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 font-serif text-2xl text-white lg:-left-16 lg:h-32 lg:w-32 lg:text-5xl"
			>{start}{Math.round($counter)}{end}</span
		>{description}
	</div>
</div>
