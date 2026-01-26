import React from 'react'
import type { IMenuItems } from '../../types/MenuTypes'
import MenuPosition from '../MenuPosition/MenuPosition'

const MenuList: React.FC<{ list: IMenuItems[] }> = ({ list }) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2'>
			{list.map((item) => (
				<MenuPosition
					key={item.id}
					id={item.id}
					name={item.name}
					description={item.description}
					prep_time={item.prep_time}
					ingredients={item.ingredients}
				/>
			))}
		</div>
	)
}

export default MenuList
