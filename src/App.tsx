import "./App.css";
import Line from "./components/Line";
import Section from "./components/Section";
import Title from "./components/Title";
import data from "./menu.json";

function App() {
    return (
        <>
            <Title />
            <Line />
            {data.menu.map((item) => (
                <div key={item.id}>
                    <Section categoryName={item.category_name} items={item.items} />
                    {data.menu.length > item.id && <Line />}
                </div>
            ))}
        </>
    );
}

export default App;
