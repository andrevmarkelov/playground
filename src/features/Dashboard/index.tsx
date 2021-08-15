import React, {useRef} from 'react';

import {getData} from '../../store/Dashboard';
import {
    useAppDispatch,
    useAppSelector,
} from '../../app/hooks';
import {Table} from '../../components/Table';

export const Dashboard: React.FC = () => {
    const dispatch = useAppDispatch();
    const count = useRef(0);
    const items = useAppSelector(({dashboard}) => dashboard.items);

    const increase = () => {
        count.current++;
        dispatch(getData(count.current));
    };

    return (
        <div>
            <Table/>
            <h1>Dashboard <button onClick={increase}>Increase</button></h1>
            <ul>
                {items.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
};
