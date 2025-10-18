import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-scroll";

import { SquareMenu } from "lucide-react";

import type { IMenu } from "../../types/MenuTypes";

type MenuMapProps = {
    data: IMenu[];
};

const TOP_OFFSET = 60;

const MenuMap: React.FC<MenuMapProps> = ({ data }) => {
    return (
        <nav>
            <DropdownMenu>
                <DropdownMenuTrigger className="border-[1px] border-[var(--secondary)] p-1 rounded-sm">
                    <SquareMenu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0000003f] backdrop-blur-xxs text-right text-primary-foreground border-none rounded-none w-[70vw] h-[100vh] mt-2.5 xl:w-full xl:h-full xl:rounded-sm">
                    <DropdownMenuLabel className="text-lg xl:text-center">Карта меню</DropdownMenuLabel>
                    <ul>
                        {data.map((item) => (
                            <li>
                                <Link to={item.id} smooth offset={-TOP_OFFSET}>
                                    <DropdownMenuItem className="text-right block my-1.5 xl:px-2 xl:text-left">
                                        {item.category_name}
                                    </DropdownMenuItem>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
};

export default MenuMap;
