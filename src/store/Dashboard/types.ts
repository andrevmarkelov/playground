export interface State {
    items: string[];
    loading: LoadingState;
    error?: string;
}

export enum LoadingState {
    IDLE,
    REQUEST,
    SUCCESS,
    FAILURE,
}
