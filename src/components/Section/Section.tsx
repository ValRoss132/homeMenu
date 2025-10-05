import React from "react";
import SectionName from "./SectionName";
import List from "../List";
import type { IMenuItems } from "../../types/MenuTypes";

type SectionProps = {
    id?: string;
    categoryName: string;
    items: IMenuItems[];
};

const Section: React.FC<SectionProps> = ({ categoryName, items }) => {
    return (
        <section className="flex-col my-2.5">
            <SectionName name={categoryName} />
            <List list={items} />
        </section>
    );
};

export default Section;
