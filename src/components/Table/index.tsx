import {Button} from '@material-ui/core';
import React from 'react';

import {TableItem} from '../TableItem';
import {useStyles} from './styles';
import {Props} from './types';

export const Table: React.FC<Props> = ({items}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.tableHeader}>
                <h1>Вся работа</h1>
                <Button variant="contained" color="secondary" classes={{root: classes.buttonPlaceOrder}}>Разместить заказ</Button>
            </div>
            <div className={classes.tableBody}>
                {items.map((item) => (
                    <TableItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};
