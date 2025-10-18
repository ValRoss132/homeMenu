import React from "react";
import MenuSectionName from "./MenuSectionName";
import MenuList from "../MenuList";
import type { IMenuItems } from "../../types/MenuTypes";

type SectionProps = {
    id?: string;
    categoryName: string;
    items: IMenuItems[];
};

const MenuSection: React.FC<SectionProps> = ({ categoryName, items }) => {
    return (
        <section className="flex-col my-2.5">
            <MenuSectionName name={categoryName} />
            <MenuList list={items} />
        </section>
    );
};

export default MenuSection;
