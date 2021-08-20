import React, {useEffect} from 'react';

import {actions} from '../../store/Dashboard';
import {
    useAppDispatch,
    useAppSelector,
} from '../../app/hooks';
import {OrderTable} from '../../components/OrderTable';

export const Dashboard: React.FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(({dashboard}) => dashboard.items);

    useEffect(() => {
        dispatch(actions.getItems());
    }, [dispatch]);

    return (
        <div>
            <OrderTable
                items={items}
            />
        </div>
    );
};
