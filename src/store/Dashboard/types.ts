export interface Order {
    id: string;
    title: string;
    price: number;
    created: string;
    about: string;
    views: number;
}

export interface State {
    items: Order[];
}
