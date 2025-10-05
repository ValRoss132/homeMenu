import React, { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { PositionProps } from "../Position/Position";

import { SquareMenu } from "lucide-react";

type HeaderProps = {
    data: {
        id: number;
        category_name: string;
        items: PositionProps[];
    }[];
};

const SCROLL_THRESHOLD = 60;

const Header: React.FC<HeaderProps> = ({ data }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const handleScroll = (): void => {
        if (window.scrollY < SCROLL_THRESHOLD) {
            setIsVisible(true);
            setLastScrollY(window.scrollY);
        }

        if (window.scrollY > lastScrollY && isVisible && window.scrollY > SCROLL_THRESHOLD) {
            setIsVisible(false);
        } else if (window.scrollY < lastScrollY && !isVisible) {
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`bg-[#0000003f] fixed top-0 left-0 w-[100%] py-3 px-2 transition-transform duration-100 ease-linar ${
                !isVisible ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <div className="flex justify-end rootWidth">
                <DropdownMenu>
                    <DropdownMenuTrigger className="border-[1px] border-[var(--secondary)] p-1 rounded-sm">
                        <SquareMenu />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Карта меню</DropdownMenuLabel>
                        <DropdownMenuSeparator></DropdownMenuSeparator>
                        {data.map((item) => (
                            <DropdownMenuItem>{item.category_name}</DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Header;
