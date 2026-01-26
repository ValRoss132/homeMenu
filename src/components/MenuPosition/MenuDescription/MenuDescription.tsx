import React from 'react'

const MenuDescription: React.FC<{ description: string }> = ({
	description,
}) => {
	return (
		<div className='text-sm text-muted-foreground font-light leading-relaxed my-2 max-w-[90%]'>
			{description}
		</div>
	)
}

export default MenuDescription
