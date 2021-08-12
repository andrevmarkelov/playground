import {Grid} from '@material-ui/core';
import React from 'react';
import {useStyles} from './styles';

export const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="space-between" alignItems="center" className={classes.header}>
            <ul>
                <li>Список заказов</li>
                <li>Профиль</li>
            </ul>
        </Grid>
    );
};
