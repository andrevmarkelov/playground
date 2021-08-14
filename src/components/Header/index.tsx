import {Grid} from '@material-ui/core';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {useStyles} from './styles';

export const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.header}>
            <ul>
                <li className={classes.headerList}>
                    <NavLink to='/dashboard' className={classes.headerLink}>Список заказов</NavLink>
                </li>
                <li className={classes.headerList}>
                    <NavLink to='/profile' className={classes.headerLink}>Профиль</NavLink>
                </li>
            </ul>
        </Grid>
    );
};
