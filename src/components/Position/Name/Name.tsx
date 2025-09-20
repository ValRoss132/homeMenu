import React from "react";

const Name: React.FC<{ name: string }> = ({ name }) => {
    return <div className="text-xl font-bold">{name}</div>;
};

export default Name;
