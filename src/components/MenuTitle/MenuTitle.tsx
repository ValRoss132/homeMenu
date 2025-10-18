import type React from "react";

type TitleProps = {
    className?: string;
};

const MenuTitle: React.FC<TitleProps> = ({ className }) => {
    return <h1 className={className}>Home Menu</h1>;
};

export default MenuTitle;
