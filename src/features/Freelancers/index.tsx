import React from 'react';

import {useStyles} from './styles';
import {Freelancer} from '../../store/Freelancers/types';

export const Freelancers: React.FC<Freelancer> = ({id, email, username, phone, rating, about, registered}) => {
    const classes = useStyles();

    return (
        <div className={classes.someClass}>
            <p>Freelancers</p>
            <p>{id}</p>
            <p>{email}</p>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{rating}</p>
            <p>{about}</p>
            <p>{registered}</p>
        </div>
    );
};
