import React from "react";
import MenuPosition from "../MenuPosition/MenuPosition";
import type { IMenuItems } from "../../types/MenuTypes";

const MenuList: React.FC<{ list: IMenuItems[] }> = ({ list }) => {
    return (
        <div className="flex-col">
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
    );
};

export default MenuList;
