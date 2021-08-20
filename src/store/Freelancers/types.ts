export interface Freelancer {
    id: string;
    email: string;
    username: string;
    phone: string;
    rating: number;
    about: string;
    registered: string;
}

export interface State {
    items: Freelancer[];
}
