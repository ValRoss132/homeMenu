import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-scroll";

import { SquareMenu } from "lucide-react";

import type { IMenu } from "../../types/MenuTypes";

type MenuMapProps = {
    data: IMenu[];
};

const MenuMap: React.FC<MenuMapProps> = ({ data }) => {
    return (
        <nav>
            <DropdownMenu>
                <DropdownMenuTrigger className="border-[1px] border-[var(--secondary)] p-1 rounded-sm">
                    <SquareMenu />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Карта меню</DropdownMenuLabel>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <ul>
                        {data.map((item) => (
                            <li>
                                <Link to={item.id} smooth>
                                    <DropdownMenuItem>{item.category_name}</DropdownMenuItem>
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
