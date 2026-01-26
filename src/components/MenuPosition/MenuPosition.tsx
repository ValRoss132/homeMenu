import React from 'react'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Time from '../Time'

type PositionProps = {
	id?: number
	name: string
	description: string
	ingredients: string[]
	prep_time: { hours: number; minutes: number }
}

const MenuPosition: React.FC<PositionProps> = ({
	id,
	name,
	description,
	prep_time,
	ingredients,
}) => {
	return (
		<div className='group border-b border-border/50 hover:border-primary/50 transition-colors duration-500'>
			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value={`item-${id}`} className='border-none'>
					<AccordionTrigger className='hover:no-underline py-6'>
						<div className='flex w-full justify-between items-start gap-4 text-left'>
							<div className='space-y-1'>
								<div className='text-xl md:text-2xl font-light tracking-tight group-hover:text-primary transition-colors'>
									{name}
								</div>
								<div className='text-sm text-muted-foreground font-light leading-relaxed max-w-[80%]'>
									{description}
								</div>
							</div>
							<div className='pt-1'>
								<Time
									time={prep_time}
									className='font-mono text-xs text-muted-foreground whitespace-nowrap uppercase tracking-widest'
								/>
							</div>
						</div>
					</AccordionTrigger>
					<AccordionContent className='text-muted-foreground/70 font-light pb-6 italic'>
						<span className='text-primary/50 mr-2'>—</span>
						{ingredients.join(', ')}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default MenuPosition
