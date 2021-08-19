import React from 'react';
import {Box} from '@material-ui/core';

import {Props} from './types';
import {useStyles} from './styles';
import {useParams} from 'react-router-dom';

export const SimpleComponent: React.FC<Props> = ({name, age, show}) => {
    const classes = useStyles();
    const params = useParams<{username?: string}>();

    return (
        <Box className={classes.someClass}>
            <h3>Профиль {params.username}</h3>
            <p>Имя: {name}</p>
            {' '}
            <p>Возраст: {show && age}</p>
        </Box>
    );
};
