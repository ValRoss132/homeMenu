import React from "react";

const SectionName: React.FC<{ name: string }> = ({ name }) => {
    return <h3 className="text-xl font-bold">{name}</h3>;
};

export default SectionName;
