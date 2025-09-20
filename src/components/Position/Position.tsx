import React from "react";
import Name from "./Name";
import Description from "./Description";

export type PositionProps = {
    id?: number;
    name: string;
    description: string;
};

const Position: React.FC<PositionProps> = ({ name, description }) => {
    return (
        <div className="text-left my-7">
            <Name name={name}></Name>
            <Description description={description}></Description>
        </div>
    );
};

export default Position;
