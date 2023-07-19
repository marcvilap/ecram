<script lang="ts">
	import { animate } from '$lib/actions'
	import Picture from '$components/Picture.svelte'
	export let color: 'orange' | 'cyan'
	export let num: number
	export let title: string
	export let description: string
	export let image: PictureType
	export let fix = false
</script>

<div class="sticky top-0 min-h-screen py-16 lg:py-24 items-center">
	<div use:animate class="grid lg:grid-cols-2 gap-8 lg:gap-24">
		<div
			class="p-8 text-white rounded-2xl aspect-square flex flex-col xl:p-14"
			class:bg-orange-600="{color === 'orange'}"
			class:bg-cyan-800="{color === 'cyan'}"
		>
			<h3 class="flex items-center text-xl md:text-3xl font-light gap-8">
				<span class="text-8xl md:text-[16rem] leading-none font-serif">{num}</span>
				<span>{title}</span>
			</h3>
			<p class="my-auto">{description}</p>
		</div>
		<div class="flex justify-center items-center">
			<Picture
				class="animate-fade-up animate-delay-600 aspect-square w-full md:w-96 object-contain bg-stone-100 rounded-full {fix
					? 'fix-image'
					: ''}"
				data="{image}"
			/>
		</div>
	</div>
</div>
