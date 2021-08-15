import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
    wrapper: {
        width: '1200px',
        margin: '50px auto',
        padding: '50px 0px',
        fontFamily: 'Montserrat',
    },
    orderHeader: {
        borderBottom: '1px solid #c1c1c1',
        padding: '15px 0px',
        h3: {
            fontWeight: '500',
        },
    },
    orderDescription: {
        padding: '30px 10px',
    },
    orderPublication: {
        fontSize: '11px',
        fontWeight: 'bold',
    },
});
