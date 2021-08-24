export interface Order {
    id: string;
    title: string;
    price: number;
    created: string;
    details: string;
    views: number;
}

export interface State {
    items: Order[];
}
