import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
    someClass: {
        padding: '10px',
    },
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
    },
    tableBody: {
        width: '100%',
    },
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
        textDecoration: 'none',
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
