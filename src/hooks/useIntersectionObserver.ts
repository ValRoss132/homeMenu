import { useEffect } from 'react'

export const useIntersectionObserver = (
	ids: string[],
	callback: (id: string) => void,
	options: IntersectionObserverInit = {
		// root: null,
		rootMargin: '-55% 0px -45% 0px',
		threshold: 0,
	}
) => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					callback(entry.target.id)
				}
			})
		}, options)

		ids.forEach((id) => {
			const element = document.getElementById(id)
			if (element) {
				observer.observe(element)
			}
		})

		return () => {
			observer.disconnect()
		}
	}, [ids, callback, options])
}
