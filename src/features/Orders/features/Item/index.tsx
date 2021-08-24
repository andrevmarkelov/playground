import {Grid} from '@material-ui/core';
import React, {useMemo} from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {useStyles} from './styles';
import {useAppSelector} from '../../../../app/hooks';

export const Item: React.FC<RouteComponentProps<{orderId?: string}>> = ({match}) => {
    const classes = useStyles();
    const list = useAppSelector(({orders}) => orders.items);

    const data = useMemo(() => list.find((item) => item.id === match.params.orderId), [list, match.params.orderId]);

    if (!data) {
        return null;
    }

    return (
        <div>
            <div className={classes.wrapper}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.orderHeader}
                >
                    <h3>{data.title}</h3>
                    <span>Бюджет: {data.price}$</span>
                </Grid>
                <div className={classes.orderDescription}>
                    <p>{data.details}</p>
                </div>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.orderFooter}
                >
                    <span>Опубликовано: {new Date(data.created).toLocaleDateString()}</span>
                    <p>Номер заказа #{match.params.orderId}</p>
                </Grid>
            </div>
        </div>
    );
};
