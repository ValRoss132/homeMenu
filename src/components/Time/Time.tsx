import { cn } from '@/lib/utils'
import { Clock } from 'lucide-react'
import React from 'react'

type TimeProps = {
	time: { hours: number; minutes: number }
	className?: string
}

const Time: React.FC<TimeProps> = ({ time, className }) => {
	return (
		<div
			className={cn(
				'font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-1',
				className,
			)}
		>
			<span className='opacity-50'>
				<Clock width='1.2em' height='1.2em' strokeWidth={1.5} />
			</span>
			{time.hours > 0 && <span>{time.hours}H</span>}
			{time.minutes > 0 && <span>{time.minutes}M</span>}
		</div>
	)
}

export default Time
