import {createSlice} from '@reduxjs/toolkit';

import __DATA__ from './__data__';

import initialState from './handlers';

export const {actions, reducer} = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        getItems: (state) => {
            state.items = __DATA__;
        },
    },
});

export default reducer;
