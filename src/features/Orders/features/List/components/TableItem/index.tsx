import React from 'react';
import {NavLink} from 'react-router-dom';

import {useStyles} from './styles';
import {Props} from './types';

export const TableItem: React.FC<Props> = ({id, price, created, title, details, path}) => {
    const classes = useStyles();

    return (
        <div className={classes.itemTable}>
            <div className={classes.itemTableHeader}>
                <NavLink to={`${path}/${id}`} className={classes.orderLink}>{title}</NavLink>
                <span className={classes.orderPrice}>{price}</span>
            </div>
            <div className={classes.itemTableBody}>
                <p className={classes.orderDescription}>{details}</p>
                <p className={classes.orderDate}>{created}</p>
            </div>
        </div>
    );
};
