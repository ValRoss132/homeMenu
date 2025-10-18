import React from "react";

const MenuPositionName: React.FC<{ name: string }> = ({ name }) => {
    return <div className="text-xl font-bold text-left">{name}</div>;
};

export default MenuPositionName;
