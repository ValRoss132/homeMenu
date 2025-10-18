import React from "react";
import MenuMap from "../MenuMap";

import type { IMenu } from "../../types/MenuTypes";
import { useScrollDirection } from "@/hooks/useScrollDirection";

type HeaderProps = {
    data: IMenu[];
};

const Header: React.FC<HeaderProps> = ({ data }) => {
    const scrollDirection = useScrollDirection();

    return (
        <header
            className={`bg-[#0000003f] fixed top-0 left-0 w-[100%] py-3 px-2 transition-transform duration-100 ease-linar ${
                scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <div className="flex justify-end rootWidth">
                <MenuMap data={data} />
            </div>
        </header>
    );
};

export default Header;
