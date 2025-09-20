import React from "react";
import Name from "./Name";
import Description from "./Description";
import Time from "../Time";

export type PositionProps = {
    id?: number;
    name: string;
    description: string;
    ingridients?: string[];
    prep_time: { hours: number; minutes: number };
};

const Position: React.FC<PositionProps> = ({ name, description, prep_time }) => {
    return (
        <div className="text-left my-7">
            <div className="flex justify-between gap-2">
                <div>
                    <Name name={name} />
                    <Description description={description}></Description>
                </div>
                <Time time={prep_time} />
            </div>
        </div>
    );
};

export default Position;
