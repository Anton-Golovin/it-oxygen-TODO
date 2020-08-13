import React, {useState} from 'react';
// UI
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
// Style
import {ItemsStyle} from './Items.style'

export default function Items(props) {
    const {items, onChangeItem} = props;
    const useStyles = makeStyles(ItemsStyle);
    const [firstValue, setFirstValue] = useState();
    const classes = useStyles();

    const onChangeText = (event, id) => {
        const newValue = event.target.value;
        if (newValue.length < 50) {
            onChangeItem(id, 'text', newValue);
        }
    }
    const onKeyDownText = (event, id) => {
        if (event.key === 'Enter') {
            onChangeItem(id, 'edit')
        }
        if (event.key === 'Escape' || event.key === undefined) {
            onChangeItem(id, 'edit')
            onChangeItem(id, 'text', firstValue);
        }
    }
    const onEdit = (id, initialValue) => {
        setFirstValue(initialValue);
        onChangeItem(id, 'edit')
    }

    return (
        <ul className={classes.wrapper}>
            {items.map(item => {
                return (
                    <li className={classes.item} key={item.id}>
                        <Typography variant="h6" className={classes.title}>
                            {item.edit
                                ? <TextField
                                    fullWidth
                                    onChange={(event) => onChangeText(event, item.id)}
                                    onKeyDown={(event) => onKeyDownText(event, item.id)}
                                    autoFocus
                                    value={item.text}
                                    variant="outlined"
                                />
                                : item.text}
                        </Typography>
                        <div>
                            <IconButton onClick={() => onChangeItem(item.id, 'star')}>
                                {item.star
                                    ? <StarIcon className={classes.star}/>
                                    : <StarBorderIcon className={classes.star}/>
                                }
                            </IconButton>
                            <IconButton onClick={() => onChangeItem(item.id, 'check')}>
                                {item.check
                                    ? <CheckCircleOutlineIcon className={classes.check}/>
                                    : <RadioButtonUncheckedIcon className={classes.check}/>
                                }
                            </IconButton>
                            <IconButton onClick={() => onEdit(item.id, item.text)}>
                                {item.edit
                                    ? <BorderColorIcon className={classes.edit}/>
                                    : <CreateIcon className={classes.edit}/>
                                }
                            </IconButton>
                            <IconButton onClick={() => onChangeItem(item.id, 'delete')}>
                                <HighlightOffIcon className={classes.close}/>
                            </IconButton>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}
