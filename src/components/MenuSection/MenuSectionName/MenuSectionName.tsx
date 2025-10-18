import React from "react";

const MenuSectionName: React.FC<{ name: string }> = ({ name }) => {
    return <h3 className="text-xl font-bold">{name}</h3>;
};

export default MenuSectionName;
