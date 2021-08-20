import React from 'react';

import {useStyles} from './styles';

export const Freelancers: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.someClass}>Freelancers</div>
    );
};
