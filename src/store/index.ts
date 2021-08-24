import {
    configureStore,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';
import orders from './Orders';
import freelancers from './Freelancers';

export const store = configureStore({
    reducer: {
        orders,
        freelancers,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
