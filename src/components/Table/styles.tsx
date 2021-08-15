import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
    wrapper: {
        width: '1200px',
        margin: '0 auto',
        padding: '50px 0px',
        fontFamily: 'Montserrat',
    },
    tableHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '50px',
        '& h1': {
            fontWeight: '500',
        },
    },
    tableBody: {
        width: '100%',
    },
});
