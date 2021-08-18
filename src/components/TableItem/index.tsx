import React from 'react';
import {NavLink} from 'react-router-dom';

import {useStyles} from './styles';
import {Order} from '../../store/Dashboard/types';

export const TableItem: React.FC<Order> = ({id, price, created, title, about}) => {
    const classes = useStyles();

    return (
        <div className={classes.itemTable}>
            <div className={classes.itemTableHeader}>
                <NavLink to={`/order/${id}`} className={classes.orderLink}>{title}</NavLink>
                <span className={classes.orderPrice}>{price}</span>
            </div>
            <div className={classes.itemTableBody}>
                <p className={classes.orderDescription}>{about}</p>
                <p className={classes.orderDate}>{created}</p>
            </div>
        </div>
    );
};
