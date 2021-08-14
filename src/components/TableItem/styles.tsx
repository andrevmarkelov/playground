import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
    itemTable: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #c1c1c1',
        padding: '20px 0px',
    },
    itemTableHeader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    itemTableBody: {
        width: '100%',
    },
    orderPrice: {
        color: '#00cd5e',
        fontWeight: 'bold',
    },
    orderLink: {
        color: '#026dc0',
        fontSize: '17px',
        marginBottom: '15px',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    orderDescription: {
        fontSize: '14px',
    },
    orderDate: {
        fontSize: '11px',
        fontWeight: 'bold',
        margin: '0',
        marginTop: '25px',
    },
});
