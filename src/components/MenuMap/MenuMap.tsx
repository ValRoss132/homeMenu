import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React, { useState } from 'react'
import { Link } from 'react-scroll'

import { SquareMenu } from 'lucide-react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import type { IMenu } from '../../types/MenuTypes'

type MenuMapProps = {
	data: IMenu[]
}

const TOP_OFFSET = 60

const MenuMap: React.FC<MenuMapProps> = ({ data }) => {
	const [activeCategory, setActiveCategory] = useState<string | null>(null)

	useIntersectionObserver(
		data.map((item) => item.id),
		(id) => {
			setActiveCategory(id)
		}
	)

	return (
		<nav>
			<DropdownMenu>
				<DropdownMenuTrigger className='border-[1px] border-[var(--secondary)] p-1 rounded-sm'>
					<SquareMenu />
				</DropdownMenuTrigger>
				<DropdownMenuContent className='bg-[#0000003f] backdrop-blur-xxs text-right text-primary-foreground border-none rounded-none w-[70vw] h-[100vh] mt-2.5 xl:w-full xl:h-full xl:rounded-sm'>
					<DropdownMenuLabel className='text-lg xl:text-center'>
						Карта меню
					</DropdownMenuLabel>
					<ul>
						{data.map((item) => (
							<li key={item.id}>
								<Link to={item.id} smooth offset={-TOP_OFFSET}>
									<DropdownMenuItem
										className={`text-right block my-1.5 xl:px-2 xl:text-left ${
											activeCategory === item.id ? 'text-red-400' : ''
										}`}
									>
										{item.category_name}
									</DropdownMenuItem>
								</Link>
							</li>
						))}
					</ul>
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	)
}

export default MenuMap
