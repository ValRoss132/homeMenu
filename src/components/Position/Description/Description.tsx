import React from "react";

const Description: React.FC<{ description: string }> = ({ description }) => {
    return <div className="text-sm text-zinc-300 my-2">{description}</div>;
};

export default Description;
