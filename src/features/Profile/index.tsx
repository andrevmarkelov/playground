import {Box} from '@material-ui/core';
import React from 'react';
import {useStyles} from './styles';

import {SimpleComponent} from '../../components';
import {useParams} from 'react-router-dom';

export const Profile: React.FC = () => {
    const classes = useStyles();
    const params = useParams<{username?: string}>();

    return (
        <div>
            <Box className={classes.wrapper}>
                <p>{params.username}</p>
                <SimpleComponent name="John" age={22} show/>
            </Box>
        </div>
    );
};
