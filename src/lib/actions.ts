import type { Action } from 'svelte/action'

export const stickyTop = ((node, innerHeight) => {
	node.classList.replace('relative', 'sticky')
	return {
		update(innerHeight) {
			node.style.top = `${innerHeight - node.offsetHeight}px`
		},
		destroy() {
			node.classList.replace('sticky', 'relative')
			node.style.top = 'px'
		},
	}
}) satisfies Action<HTMLElement, number>

export const animate = (node => {
	node.classList.add('animate')
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => node.classList.toggle('animate-active', entry.isIntersecting))
	})
	observer.observe(node)
	return {
		destroy() {
			node.classList.remove('animate')
			observer.disconnect()
		},
	}
}) satisfies Action
