import React from 'react'

const MenuSectionName: React.FC<{ name: string }> = ({ name }) => {
	return (
		<div className='relative mb-12 flex items-center gap-4'>
			<h3 className='text-[10px] uppercase tracking-[0.5em] text-primary font-bold whitespace-nowrap'>
				{name}
			</h3>
			<div className='w-full h-[1px] bg-border/30' />
		</div>
	)
}

export default MenuSectionName
