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
import { cn } from '@/lib/utils'
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
		},
	)

	return (
		<nav>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger className='focus:outline-none group'>
					<div className='flex items-center gap-3 border border-border/40 p-2 rounded-md hover:bg-primary/5 transition-all duration-300'>
						<span className='text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground hidden md:block group-hover:text-primary transition-colors'>
							Navigate
						</span>
						<SquareMenu
							size={20}
							strokeWidth={1.5}
							className='text-muted-foreground group-hover:text-primary'
						/>
					</div>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align='end'
					className='bg-background/95 backdrop-blur-md border-border/40 text-right w-[75vw] h-screen mt-4 rounded-none border-y-0 border-r-0 md:w-64 md:h-auto md:rounded-lg md:border'
				>
					<DropdownMenuLabel className='text-[10px] uppercase tracking-[0.4em] text-primary/60 font-black pt-8 pb-4 px-6 md:pt-4 md:text-center'>
						Selection Map
					</DropdownMenuLabel>

					<div className='flex flex-col px-4 pb-8 md:pb-4'>
						{data.map((item) => (
							<Link
								key={item.id}
								to={item.id}
								spy={true}
								smooth={true}
								offset={-TOP_OFFSET}
								duration={500}
							>
								<DropdownMenuItem
									className={cn(
										'cursor-pointer flex justify-end items-center gap-3 py-3 text-sm font-light tracking-wide transition-all focus:bg-primary/5 focus:text-primary',
										activeCategory === item.id
											? 'text-primary font-medium'
											: 'text-muted-foreground hover:text-foreground',
									)}
								>
									{item.category_name}
									<div
										className={cn(
											'w-1 h-1 rounded-full transition-all duration-500',
											activeCategory === item.id
												? 'bg-primary scale-125'
												: 'bg-transparent',
										)}
									/>
								</DropdownMenuItem>
							</Link>
						))}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	)
}

export default MenuMap
