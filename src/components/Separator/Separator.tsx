import type React from 'react'

const Separator: React.FC = () => {
	return (
		<div
			data-slot='separator'
			className='mx-auto my-24 w-full h-[1px] bg-border/30'
		/>
	)
}

export default Separator
