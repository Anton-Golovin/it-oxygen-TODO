import React from 'react';
// UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// Style
import { ClearStyle } from './Clear.style'

export default function Clear(props) {
    const { onClear } = props;
    const useStyles = makeStyles(ClearStyle);
    const classes = useStyles();

    return (
        <Button variant="outlined" color="primary" className={classes.button} onClick={onClear}>
            Clear button
        </Button>
    );
}
