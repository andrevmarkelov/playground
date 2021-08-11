import {Button} from '@material-ui/core';
import React from 'react';
import {useStyles} from '../SimpleComponent/styles';

export const Table: React.FC = () => {
    const classes = useStyles();

    const currDate = new Date().toLocaleDateString();

    return (
        <div className={classes.wrapper}>
            <div className={classes.tableHeader}>
                <h1>Вся работа</h1>
                <Button variant="contained" color="secondary">Разместить заказ</Button>
            </div>
            <div className={classes.tableBody}>
                <div className={classes.itemTable}>
                    <div className={classes.itemTableHeader}>
                        <a href="/" className={classes.orderLink}>Разработка приложения для логиста и курьеров</a>
                        <span className={classes.orderPrice}>150$</span>
                    </div>
                    <div className={classes.itemTableBody}>
                        <p className={classes.orderDescription}>
                            Необходимо создать приложение для курьеров и логиста, более подробно во вложении.
                        </p>
                        <p className={classes.orderDate}>{currDate}</p>
                    </div>
                </div>
                {/* temporary */}
                <div className={classes.itemTable}>
                    <div className={classes.itemTableHeader}>
                        <a href="/" className={classes.orderLink}>Создание серверной расчетной программы</a>
                        <span className={classes.orderPrice}>220$</span>
                    </div>
                    <div className={classes.itemTableBody}>
                        <p className={classes.orderDescription}>
                        В рамках реализации нового проекта компании Danfoss, стоит задача реализации сервера
                        для проведения ряда расчетов для подбора оборудования.
                        </p>
                        <p className={classes.orderDate}>{currDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
