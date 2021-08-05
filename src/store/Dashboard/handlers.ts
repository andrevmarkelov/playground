import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {State, LoadingState} from './types';

const initialState: State = {
    items: [],
    loading: LoadingState.IDLE,
};

export const request: CaseReducer<State> = (state) => {
    state.loading = LoadingState.REQUEST;
    delete state.error;
}

export const success: CaseReducer<State, PayloadAction<string[]>> = (state, { payload }) => {
    state.loading = LoadingState.SUCCESS;
    state.items = payload;
}

export const failure: CaseReducer<State, PayloadAction<string>> = (state, { payload }) => {
    state.loading = LoadingState.FAILURE;
    state.error = payload;
}

export default initialState;