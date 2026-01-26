import type React from 'react'

type TitleProps = {
	className?: string
}

const MenuTitle: React.FC<TitleProps> = ({ className }) => {
	return (
		<div className={`mb-24 md:mb-40 text-center md:text-left ${className}`}>
			<span className='text-[10px] uppercase tracking-[0.6em] text-primary font-bold block mb-6 font-sans'>
				Signature Selection
			</span>
			<h1 className='font-title text-6xl md:text-9xl italic leading-none text-foreground tracking-tight'>
				Home Menu
			</h1>
		</div>
	)
}

export default MenuTitle
