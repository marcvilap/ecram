type Img = {
	src: string
	w: number
	h?: number
}

type PictureType = {
	sources: {
		heic?: Img[]
		heif?: Img[]
		avif?: Img[]
		jpeg?: Img[]
		jpg?: Img[]
		png?: Img[]
		tiff?: Img[]
		webp?: Img[]
		gif?: Img[]
	}
	img: Img
}

declare module '$assets/images/*as=picture' {
	const meta: PictureType
	export default meta
}
