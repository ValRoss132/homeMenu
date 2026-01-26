import React from 'react'

const MenuPositionName: React.FC<{ name: string }> = ({ name }) => {
	return (
		<div className='text-xl md:text-2xl font-light tracking-tight text-foreground transition-colors group-hover:text-primary'>
			{name}
		</div>
	)
}

export default MenuPositionName
