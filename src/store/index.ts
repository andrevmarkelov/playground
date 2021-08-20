import {
    configureStore,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';
import dashboard from './Dashboard';
import freelancers from './Freelancers';

export const store = configureStore({
    reducer: {
        dashboard,
        freelancers,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
