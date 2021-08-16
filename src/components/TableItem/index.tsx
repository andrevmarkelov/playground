import React from 'react';
import {NavLink} from 'react-router-dom';
import {useStyles} from './styles';
import {Props} from './types';

export const TableItem: React.FC<Props> = ({link, price, description, date, id}) => {
    const classes = useStyles();

    return (
        <div className={classes.itemTable}>
            <div className={classes.itemTableHeader}>
                <NavLink to={`/order/${id}`} className={classes.orderLink}>{link}</NavLink>
                <span className={classes.orderPrice}>{price}</span>
            </div>
            <div className={classes.itemTableBody}>
                <p className={classes.orderDescription}>{description}</p>
                <p className={classes.orderDate}>{date}</p>
            </div>
        </div>
    );
};
