import "./App.css";
import Header from "./components/Header";
import Separator from "./components/Separator";
import MenuSection from "./components/MenuSection";
import MenuTitle from "./components/MenuTitle";
import data from "./menu.json";
import { Element } from "react-scroll";

function App() {
    return (
        <>
            <Header data={data.menu} />
            <MenuTitle className="my-20 -mb-11" />
            <Separator />
            {data.menu.map((item, index) => (
                <Element key={item.id} name={item.id}>
                    <MenuSection categoryName={item.category_name} items={item.items} />
                    {data.menu.length > index + 1 && <Separator />}
                </Element>
            ))}
        </>
    );
}

export default App;
