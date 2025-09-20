import React from "react";

type TimeProps = {
    time: { hours: number; minutes: number };
};

const Time: React.FC<TimeProps> = ({ time }) => {
    return (
        <div>
            <span>~</span>
            {time.hours > 0 && (
                <>
                    <span>{time.hours}</span>
                    <span>ч </span>
                </>
            )}
            {time.minutes > 0 && (
                <>
                    <span>{time.minutes}</span>
                    <span>мин</span>
                </>
            )}
        </div>
    );
};

export default Time;
