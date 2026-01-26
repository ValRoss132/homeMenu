import React from 'react'
import MenuMap from '../MenuMap'

import { useScrollDirection } from '@/hooks/useScrollDirection'
import type { IMenu } from '../../types/MenuTypes'

type HeaderProps = {
	data: IMenu[]
}

const Header: React.FC<HeaderProps> = ({ data }) => {
	const scrollDirection = useScrollDirection()

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-500 border-b border-border/10
                ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
                bg-background/80 backdrop-blur-md`}
		>
			<div className='max-w-6xl mx-auto flex justify-between items-center'>
				<div className='text-[10px] uppercase tracking-[0.4em] font-black text-primary'>
					The Menu
				</div>
				<MenuMap data={data} />
			</div>
		</header>
	)
}

export default Header
