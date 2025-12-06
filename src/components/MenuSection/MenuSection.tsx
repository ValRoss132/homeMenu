import React from 'react'
import type { IMenuItems } from '../../types/MenuTypes'
import MenuList from '../MenuList'
import MenuSectionName from './MenuSectionName'

type SectionProps = {
	id?: string
	categoryName: string
	items: IMenuItems[]
}

const MenuSection: React.FC<SectionProps> = ({ id, categoryName, items }) => {
	return (
		<section className='flex-col my-2.5' id={id}>
			<MenuSectionName name={categoryName} />
			<MenuList list={items} />
		</section>
	)
}

export default MenuSection
