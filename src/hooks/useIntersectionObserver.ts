import { useEffect } from 'react'

export const useIntersectionObserver = (
	ids: string[],
	callback: (id: string) => void,
	options: IntersectionObserverInit = {
		// root: null,
		rootMargin: '0px',
		threshold: 0,
	}
) => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(
					'Observed element:',
					entry.target.id,
					'isIntersecting:',
					entry.isIntersecting
				)
				if (entry.isIntersecting) {
					callback(entry.target.id)
				}
			})
		}, options)

		ids.forEach((id) => {
			const element = document.getElementById(id)
			if (element) {
				console.log('Observing element:', id)
				observer.observe(element)
			}
		})

		return () => {
			observer.disconnect()
		}
	}, [ids, callback, options])
}
