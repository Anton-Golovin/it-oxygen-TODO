export const AppStyle = theme => ({
    container: {
        maxWidth: 750,
        padding: 20,
        margin: '10px auto',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
        },
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
});
