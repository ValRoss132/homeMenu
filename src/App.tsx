import { Element } from 'react-scroll'
import './App.css'
import { Footer } from './components/Footer/Footer'
import Header from './components/Header'
import MenuSection from './components/MenuSection'
import MenuTitle from './components/MenuTitle'
import data from './menu.json'

function App() {
	return (
		<div className='dark min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground'>
			<Header data={data.menu} />

			<main className='max-w-7xl mx-auto w-full pr-8 pl-6 pt-32 pb-20'>
				<MenuTitle />

				{data.menu.map((item) => (
					<Element key={item.id} name={item.id} id={item.id}>
						<MenuSection categoryName={item.category_name} items={item.items} />
					</Element>
				))}
				<Footer />
			</main>
		</div>
	)
}

export default App
