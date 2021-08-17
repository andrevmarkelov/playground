import {Grid} from '@material-ui/core';
import React from 'react';
import {useStyles} from './styles';
import {useParams} from 'react-router-dom';

export const Order: React.FC = () => {
    const classes = useStyles();
    const params = useParams<{orderId?: string}>();

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
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.orderFooter}
                >
                    <span>Опубликовано: {new Date().toLocaleDateString()}</span>
                    <p>Номер заказа #{params.orderId}</p>
                </Grid>
            </div>
        </div>
    );
};
