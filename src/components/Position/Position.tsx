import React from "react";
import Name from "./Name";
import Description from "./Description";
import Time from "../Time";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type PositionProps = {
    id?: number;
    name: string;
    description: string;
    ingredients: string[];
    prep_time: { hours: number; minutes: number };
};

const Position: React.FC<PositionProps> = ({ name, description, prep_time, ingredients }) => {
    return (
        <div className="text-left my-7">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                        <div className="flex w-[100%] justify-between gap-2">
                            <div>
                                <Name name={name} />
                                <Description description={description}></Description>
                            </div>
                            <Time time={prep_time} />
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <span>&#40;</span>
                        {ingredients.map((ing) => (
                            <>
                                <span>{ing}</span>
                                {ingredients.length > ingredients.indexOf(ing) + 1 && <span>, </span>}
                            </>
                        ))}
                        <span>&#41;</span>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Position;
