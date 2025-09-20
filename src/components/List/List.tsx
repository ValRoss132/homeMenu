import React from "react";
import type { PositionProps } from "../Position/Position";
import Position from "../Position/Position";

const List: React.FC<{ list: PositionProps[] }> = ({ list }) => {
    return (
        <div className="flex-col">
            {list.map((item) => (
                <Position key={item.id} name={item.name} description={item.description} />
            ))}
        </div>
    );
};

export default List;
