import {Grid} from '@material-ui/core';
import React from 'react';
import {useStyles} from './styles';

export const Order: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.wrapper}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.orderHeader}
                >
                    <h3>Разработка приложения для логиста и курьеров</h3>
                    <span>Бюджет: 150$</span>
                </Grid>
                <div className={classes.orderDescription}>
                    <p>Необходимо создать приложение для курьеров и логиста, более подробно во вложении.</p>
                </div>
                <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="center"
                    className={classes.orderPublication}
                >
                    Опубликовано: {new Date().toLocaleDateString()}
                </Grid>
            </div>
        </div>
    );
};
