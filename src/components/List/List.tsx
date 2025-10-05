import React from "react";
import Position from "../Position/Position";
import type { IMenuItems } from "../../types/MenuTypes";

const List: React.FC<{ list: IMenuItems[] }> = ({ list }) => {
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
