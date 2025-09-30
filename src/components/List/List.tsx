import React from "react";
import type { PositionProps } from "../Position/Position";
import Position from "../Position/Position";

const List: React.FC<{ list: PositionProps[] }> = ({ list }) => {
    return (
        <div className="flex-col">
            {list.map((item) => (
                <Position
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    prep_time={item.prep_time}
                    ingredients={item.ingredients}
                />
            ))}
        </div>
    );
};

export default List;
