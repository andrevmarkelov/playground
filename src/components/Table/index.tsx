import {Button} from '@material-ui/core';
import React from 'react';
import {TableItem} from '../TableItem';
import {useStyles} from './styles';

type ordersItemsType = {
    id: number;
    link: string;
    price: string;
    description: string;
    date: string;
}

const ordersItems: ordersItemsType[] = [
    {
        id: 0,
        link: 'Разработка приложения для логиста и курьеров',
        price: '150$',
        description: 'Необходимо создать приложение для курьеров и логиста, более подробно во вложении.',
        date: new Date().toLocaleDateString(),
    },
    {
        id: 1,
        link: 'Создание серверной расчетной программы',
        price: '220$',
        description: 'В рамках реализации нового проекта компании Danfoss, стоит задача реализации сервера для проведения ряда расчетов для подбора оборудования.',
        date: new Date().toLocaleDateString(),
    },
];

export const Table: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.tableHeader}>
                <h1>Вся работа</h1>
                <Button variant="contained" color="secondary">Разместить заказ</Button>
            </div>
            <div className={classes.tableBody}>
                {ordersItems.map((item) => (
                    <TableItem
                        key={item.id}
                        id={item.id}
                        link={item.link}
                        price={item.price}
                        description={item.description}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    );
};
