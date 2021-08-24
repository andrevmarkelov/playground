import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Button} from '@material-ui/core';

import {actions} from '../../../../store/Orders';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../../app/hooks';
import {useStyles} from './styles';
import {TableItem} from './components';

export const List: React.FC<RouteComponentProps> = ({match}) => {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const items = useAppSelector(({orders}) => orders.items);

    useEffect(() => {
        dispatch(actions.getItems());
    }, [dispatch]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.tableHeader}>
                <h1>Вся работа</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    classes={{root: classes.buttonPlaceOrder}}
                >
                    Разместить заказ
                </Button>
            </div>
            <div className={classes.tableBody}>
                {items.map((item) => (
                    <TableItem
                        path={match.path}
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};
