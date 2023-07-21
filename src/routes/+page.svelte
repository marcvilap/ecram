<script lang="ts">
	import { base } from '$app/paths'
	import video1 from '$assets/videos/video1.mp4'
	import video2 from '$assets/videos/video2.mp4'
	import video3 from '$assets/videos/video3.mp4'
	import video4 from '$assets/videos/video4.mp4'
	import logo from '$assets/images/logo.png?w=336&format=avif;png&as=picture'
	import sol from '$assets/images/sol.png?w=200&format=avif;jpg&as=picture'
	import uva from '$assets/images/uva.png?w=448,600&format=avif;jpg&as=picture'
	import uvb from '$assets/images/uvb.png?w=448,600&format=avif;jpg&as=picture'
	import piel from '$assets/images/piel.png?w=448;744&aspect=1:1&format=avif;jpg&as=picture'
	import playa from '$assets/images/playa.jpg?aspect=16:9&w=448;768;1024;1280;1920&aspect=4:3&format=avif;jpg&as=picture'
	import producto1 from '$assets/images/producto1.png?h=576&format=avif;jpg&as=picture'
	import producto2 from '$assets/images/producto2.png?h=576&format=avif;jpg&as=picture'
	import producto3 from '$assets/images/producto3.png?h=576&format=avif;jpg&as=picture'
	import producto4 from '$assets/images/producto4.png?h=576&format=avif;jpg&as=picture'
	import cara from '$assets/images/cara.jpg?w=w=448;744&aspect=1:1&format=avif;jpg&as=picture'
	import item2 from '$assets/images/item2.jpg?w=w=448;768&aspect=1:1&format=avif;jpg&as=picture'
	import item3 from '$assets/images/item3.jpg?w=w=448;768&aspect=1:1&format=avif;jpg&as=picture'
	import item4 from '$assets/images/item4.jpg?w=w=448;768&aspect=1:1&format=avif;jpg&as=picture'
	import { stickyTop, animate } from '$lib/actions'
	import { Lottie } from 'lottie-svelte'
	import Picture from '$components/Picture.svelte'
	import Counter from '$components/Counter.svelte'
	import BlockItem from '$components/BlockItem.svelte'
	let innerHeight = 0
</script>

<svelte:window bind:innerHeight />

<main class="text-cyan-800 overflow-clip">
	<div class="animate relative bg-stone-100">
		<div use:animate class="container pb-16 pt-24 lg:pb-24">
			<a class="mb-8 block w-28" href="{base}">
				<small class="mb-3 block text-xs leading-none text-stone-500">Vacaciones bajo el sol<br />Un proyecto de</small>
				<Picture class="w-full" data="{logo}" />
			</a>
			<h1 class="mb-8 max-w-[40rem] font-serif text-4xl font-light text-stone-500 md:mb-12">
				<span class="animate-fade-up block"
					>Radiografía de las diferentes ‘caras’ del sol y cómo <span class="text-cyan-800"
						>inciden en nuestra piel</span
					></span
				>
			</h1>
			<div class="grid items-center gap-8 lg:grid-cols-[3fr_1fr] xl:gap-24">
				<div class="grid grid-cols-3 gap-1 lg:gap-4 xl:pl-24">
					<video
						class="animate-fade-up animate-delay-100 aspect-[9/16] w-full rounded-2xl object-cover"
						src="{video1}"
						autoplay
						loop
						muted
						playsinline
					></video>
					<video
						class="animate-fade-up animate-delay-200 aspect-[9/16] w-full rounded-2xl object-cover"
						src="{video2}"
						autoplay
						loop
						muted
						playsinline
					></video>
					<video
						class="animate-fade-up animate-delay-300 aspect-[9/16] w-full rounded-2xl object-cover"
						src="{video3}"
						autoplay
						loop
						muted
						playsinline
					></video>
				</div>
				<div class="animate-fade-up animate-delay-400">
					<p class="mb-4 text-orange-600">
						El sol, ese brillante astro que nos brinda luz y calor, también puede tener un impacto significativo en
						nuestra piel. ¿Qué tipos de luz hay? ¿Cómo afectan a nuestra piel? ¿Me hace lo mismo en la dermis que en la
						epidermis? ¿Cómo me protejo ante ellos de forma sencilla y efectiva? Vuelve el verano, vuelve uno de los
						must de la salud.
					</p>
					<a class="flex items-center gap-2 hover:underline" href="#down">
						<Lottie class="w-6" path="{base}/down.json" />
						<span>Saber más</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div id="down"></div>

	<video class="sticky top-0 h-screen w-full bg-stone-500 object-cover" src="{video4}" autoplay loop muted playsinline
	></video>

	<div use:stickyTop="{innerHeight}" class="relative bg-white py-16 lg:py-24">
		<div use:animate class="container">
			<h2 class="mb-8 text-center font-serif text-2xl font-light md:mb-16 md:text-4xl">
				<span class="animate-fade-up block">El peligro de la radiación solar</span>
			</h2>
			<div>
				<div class="animate-fade-up animate-delay-200 mx-auto grid max-w-sm gap-4 text-lg lg:gap-8">
					<Counter
						end="%"
						num="{50}"
						description="Reduce la respuesta inmunológica de la piel en un 50% en tan solo 20 minutos."
					/>
					<Counter end="%" num="{80}" description="Responsable del 80% del envejecimiento de la piel." />
					<Counter
						end="%"
						num="{95}"
						description="El 95% de la radiación UVA puede penetrar en las capas más profundas de la piel (como la dermis)."
					/>
					<Counter start="+" end="%" num="{15}" description="En los últimos cinco años: +15% de quemaduras solares" />
				</div>
			</div>
		</div>
	</div>

	<div use:stickyTop="{innerHeight}" class="relative bg-stone-100 py-16 lg:py-24">
		<div use:animate class="container xl:max-w-screen-xl">
			<div>
				<h2
					class="mx-auto mb-8 max-w-md text-center font-serif text-2xl font-light text-stone-500 md:mb-16 md:text-4xl"
				>
					<span class="animate-fade-up block">¿Qué tipos de rayos existen y qué provoca cada uno?</span>
				</h2>
				<p class="mb-16 text-center text-orange-600">
					<span class="animate-fade-up animate-delay-200 block"
						>Cuando hablamos de la radiación solar, nos referimos a los rayos ultravioleta (UV) que emite el sol.<br
						/>Existen dos tipos principales de rayos UV: <strong>los rayos UVA y los rayos UVB.</strong></span
					>
				</p>
				<Picture class="animate-zoom-in animate-delay-400 mx-auto w-36 md:-mb-8" data="{sol}" />
			</div>
			<div class="grid gap-8 md:grid-cols-2 xl:gap-24 xl:px-24">
				<div class="animate-fade-right animate-delay-400">
					<Picture class="mb-8" data="{uva}" />
					<h3 class="mb-4 text-center font-bold">Rayos UVA</h3>
					<p>
						Los rayos UVA son como intrépidos exploradores que pueden penetrar profundamente en nuestra piel, incluso en
						días nublados o detrás de una ventana. Están presentes durante todo el año y pueden contribuir al
						envejecimiento prematuro de la piel. ¡Nunca subestimes su poder!
					</p>
				</div>
				<div class="animate-fade-left animate-delay-400">
					<Picture class="mb-8" data="{uvb}" />
					<h3 class="mb-4 text-center font-bold">Rayos UVB</h3>
					<p>
						Los rayos UVB son los “culpables” de las quemaduras solares. Son más intensos durante los meses de verano y
						en las horas pico de exposición solar. No penetran tan profundamente como los UVA, pero pueden dañar las
						capas superficiales de la piel.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div use:stickyTop="{innerHeight}" class="relative bg-white py-16 lg:py-24">
		<div use:animate class="container">
			<h2 class="mx-auto mb-8 max-w-[54rem] text-center font-serif text-2xl font-light md:mb-16 md:text-4xl">
				<span class="animate-fade-up block"
					>¿Cómo afectan en las diferentes capas de nuestra piel? De las quemaduras al deterioro de la piel</span
				>
			</h2>
			<div class="grid items-center gap-4 lg:grid-cols-2 lg:gap-24">
				<div class="grid gap-4 md:gap-8">
					<div>
						<div class="animate-fade-up animate-delay-200 rounded-2xl bg-stone-100 p-8">
							<h3 class="font-bold uppercase">Epidermis</h3>
							<p>
								La epidermis es la capa externa de la piel y es la primera en recibir la radiación solar. Aquí es <strong
									>donde se forman las quemaduras</strong
								>
								solares y donde se producen los primeros <strong>signos visibles de envejecimiento</strong> causados por
								la exposición al sol sin protección.
							</p>
						</div>
					</div>
					<div>
						<div class="animate-fade-up animate-delay-400 rounded-2xl bg-stone-100 p-8">
							<h3 class="font-bold uppercase">Dermis</h3>
							<p>
								La capa intermedia de la piel, contiene colágeno y elastina, proteínas que proporcionan elasticidad y
								firmeza. La radiación UVB puede dañar las proteínas, lo que conduce a la <strong
									>formación de arrugas y flacidez</strong
								> en la piel.
							</p>
						</div>
					</div>
					<div>
						<div class="animate-fade-up animate-delay-600 rounded-2xl bg-stone-100 p-8">
							<h3 class="font-bold uppercase">Capa Subcutánea</h3>
							<p>
								En lo más profundo de la piel se encuentra la capa subcutánea, que contiene grasa y tejido conectivo. La
								exposición crónica a la radiación solar puede afectar esta capa, lo que puede provocar una disminución
								en la producción de colágeno y elastina, y contribuir al <strong
									>deterioro de la estructura y apariencia de la piel</strong
								>.
							</p>
						</div>
					</div>
				</div>
				<div>
					<Picture class="animate-zoom-in animate-delay-600 w-full rounded-2xl lg:rounded-full" data="{piel}" />
				</div>
			</div>
		</div>
	</div>

	<div use:stickyTop="{innerHeight}" class="relative bg-stone-100 pt-16 lg:pt-24">
		<div class="container">
			<div use:animate>
				<h2 class="animate-fade-up mb-8 text-center font-serif text-2xl font-light text-stone-500 md:mb-16 md:text-4xl">
					Los cinco mandamientos para proteger nuestra piel
				</h2>
				<p class="animate-fade-up animate-delay-200 mx-auto max-w-[40rem] text-center text-orange-600">
					Ahora que sabemos un poco más sobre los diferentes tipos de radiación solar y los efectos en nuestra piel, es
					momento de tener clara la solución. Os traemos cinco tips básicos de la mano los expertos de
					<a class="underline font-bold" target="_blank" rel="sponsored" href="https://somosecran.com/somos-ecran/">
						Ecran®</a
					>, marca líder en productos para la protección solar:
				</p>
			</div>

			<BlockItem
				image="{producto1}"
				color="orange"
				num="{1}"
				title="Protector solar de amplio espectro"
				description="Busca un protector solar que ofrezca protección de amplio espectro, lo que significa que protege contra los rayos UVA y UVB. Asegúrate de elegir uno adecuado para tu tipo de piel y aplicarlo generosamente antes de exponerte al sol."
			/>

			<BlockItem
				image="{item2}"
				color="cyan"
				num="{2}"
				title="Reaplicación regular"
				description="No olvides reaplicar el protector solar cada dos horas, especialmente si estás nadando, sudando o pasando mucho tiempo al aire libre."
			/>

			<BlockItem
				image="{item3}"
				color="orange"
				num="{3}"
				title="Sombrero y gafas de sol"
				description="Complementa la protección solar con un sombrero de ala ancha y gafas de sol que bloqueen los rayos UVA y UVB. ¡Protección y mucho estilo!"
			/>

			<BlockItem
				image="{item4}"
				color="cyan"
				num="{4}"
				title="Sombra y ropa protectora"
				description="Busca sombra cuando el sol está en su punto más fuerte, generalmente entre las 10 de la mañana y las 4 de la tarde. Además, considera usar ropa que cubra brazos y piernas para una protección adicional."
			/>

			<BlockItem
				fix
				image="{producto4}"
				color="orange"
				num="{5}"
				title="Después del sol, hidratación y cuidado"
				description="Tras la exposición, es clave es hidrata y calmar la piel. Para ello, se recomienda usar un post-solar refrescante con ingredientes calmantes y nutritivos, como aloe vera, vitamina E o pantenol. Estos ingredientes ayudan a revitalizar la piel y a mantenerla en óptimas condiciones."
			/>
		</div>
	</div>

	<div use:stickyTop="{innerHeight}" class="relative flex bg-white py-16 min-h-screen lg:py-24">
		<Picture class="absolute left-0 top-0 h-full w-full object-cover object-top" data="{playa}" />
		<div use:animate class="container relative flex flex-col justify-between lg:gap-24">
			<h3 class="mx-auto max-w-xl text-center md:text-xl">
				<span class="block animate-fade-up"
					>La <a href="https://somosecran.com/sunnique/" target="_blank" class="text-orange-600 underline"
						>gama Sunnique de Ecran®</a
					> ofrece una amplia variedad de protectores para que tu piel esté protegida y reforzada en todo momento. Además,
					refuerza las defensas y antioxidantes de la piel y evita el envejecimiento prematuro. Un imprescindible en tu neceser</span
				>
			</h3>
			<div class="grid grid-cols-3 gap-4 xl:px-24">
				<div class="animate-zoom-in animate-delay-200 flex items-end justify-center">
					<Picture class="h-52 w-auto md:h-96" data="{producto1}" />
				</div>
				<div class="animate-zoom-in animate-delay-600 flex items-end justify-center">
					<Picture class="h-44 w-auto md:h-80" data="{producto2}" />
				</div>
				<div class="animate-zoom-in animate-delay-400 flex items-end justify-center">
					<Picture class="h-52 w-auto md:h-96" data="{producto3}" />
				</div>
			</div>
		</div>
	</div>

	<div class="relative bg-stone-100 py-16 lg:pb-48 lg:pt-24">
		<div use:animate class="container">
			<div class="grid lg:grid-cols-2 items-center gap-8 lg:gap-24">
				<div class="animate-fade-right">
					<p class="max-w-sm text-xl">
						El <a
							href="https://somosecran.com/productos/leche-hidratante-reparadora-familiar/"
							target="_blank"
							class="text-orange-600 underline">post-solar ECRAN® Aftersun®</a
						> es el complemento perfecto para aplicar después de haber estados expuestos al sol. Su fórmula con propiedades
						antiinflamatorias hidrata, repara y refuerza las defensas de la piel
					</p>
				</div>
				<div class="animate-fade-left relative">
					<Picture class="w-full rounded-2xl" data="{cara}" />
					<Picture class="absolute -bottom-24 -left-24 w-48" data="{producto4}" />
				</div>
			</div>
		</div>
	</div>

	<div class="relative bg-stone-100 py-16 lg:py-24">
		<Picture class="absolute left-0 top-0 h-full w-full object-cover object-bottom opacity-25" data="{playa}" />
		<div use:animate class="container relative">
			<div class="animate-fade-up">
				<h2 class="mx-auto mb-8 max-w-2xl text-center font-serif text-xl font-light text-stone-500 md:mb-16">
					El sol puede ser maravilloso, pero también tiene su lado desafiante. Ahora que sabes un poco más sobre cómo
					actúa, no tendrás excusa para no protegerte. ¡La piel es el órgano más grande del cuerpo humano!
				</h2>
				<p class="mb-4 text-center text-xs uppercase">ElTiempo Content para</p>
				<Picture class="mx-auto block w-28" data="{logo}" />
			</div>
		</div>
	</div>
</main>

<!-- <pre>{JSON.stringify(playa, null, 4)}</pre> -->
