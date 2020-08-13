import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
// UI
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

// Style
import {SendInputStyle} from './SendInput.style'


export default function SendInput(props) {
    const useStyles = makeStyles(SendInputStyle);
    const classes = useStyles();
    const {onAddItem} = props;
    const [item, setItem] = useState({
        text: '',
        id: '',
        star: false,
        check: false,
        edit: false
    })

    const pushItem = (e) => {
        e.preventDefault();
        if (item.text) {
            onAddItem(item)
            setItem({
                ...item,
                id: uuidv4(),
                text: '',
            })
        }
    };

    const onChange = (event) => (
        event.target.value.length < 50
        && setItem({
            ...item,
            id: uuidv4(),
            text: event.target.value,
        })
    )

    return (
        <Paper component="form" onSubmit={pushItem} className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Name..."
                onChange={onChange}
                value={item.text}
            />
            <Divider className={classes.divider} orientation="vertical"/>
            <Button type="submit">
                Add item
            </Button>
        </Paper>
    );
}