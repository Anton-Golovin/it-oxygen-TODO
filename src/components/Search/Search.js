import React from 'react';
// UI
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// Style
import { SearchStyle } from './Search.style'

export default function Search(props) {
    const { onSearch } = props;
    const useStyles = makeStyles(SearchStyle);
    const classes = useStyles();

    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onChange={(event) => onSearch(event.target.value)}
            />
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
        </div>
    );
}
