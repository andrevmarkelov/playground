import React from 'react';
import { Box } from '@material-ui/core';

import { Props } from './types';
import { useStyles } from './styles';

export const SimpleComponent: React.FC<Props> = ({ name, age, show }) => {
  const classes = useStyles();

  return (
    <Box className={classes.someClass}>
      {name}
      {' '}
      {show && age}
    </Box>
  );
};
