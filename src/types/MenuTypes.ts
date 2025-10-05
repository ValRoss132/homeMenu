export interface IMenu {
    id: string
    category_name: string
    items: IMenuItems[]; 
}

export interface IMenuItems {
    id?: number;
    name: string;
    description: string;
    ingredients: string[];
    prep_time: { hours: number; minutes: number };
}