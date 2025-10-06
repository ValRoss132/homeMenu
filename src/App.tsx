import "./App.css";
import Header from "./components/Header";
import Line from "./components/Line";
import Section from "./components/Section";
import Title from "./components/Title";
import data from "./menu.json";
import { Element } from "react-scroll";

function App() {
    return (
        <>
            <Header data={data.menu} />
            <Title />
            <Line />
            {data.menu.map((item, index) => (
                <Element key={item.id} name={item.id}>
                    <Section categoryName={item.category_name} items={item.items} />
                    {data.menu.length > index + 1 && <Line />}
                </Element>
            ))}
        </>
    );
}

export default App;
