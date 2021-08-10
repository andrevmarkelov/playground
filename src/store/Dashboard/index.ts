import {
    createSlice,
    ThunkAction,
} from '@reduxjs/toolkit';

import {RootState} from '..';
import initialState, * as handlers from './handlers';

export const {actions, reducer} = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        request: handlers.request,
        success: handlers.success,
        failure: handlers.failure,
    },
});

export function fetchCount (length = 1) {
    return new Promise<string[]>((resolve) => setTimeout(() => resolve(
        Array.from({length}).map(() => Math.random().toString(16).slice(2)),
    ), 500));
}

export const getData = (count: number): ThunkAction<void, RootState, any, any> => async (dispatch) => {
    dispatch(actions.request());
    try {
        const data = await fetchCount(count);
        dispatch(actions.success(data));
    } catch (error) {
        dispatch(actions.failure(error.message));
    }
};

export default reducer;
