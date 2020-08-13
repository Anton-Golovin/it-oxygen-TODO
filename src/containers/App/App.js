import React, {useState, useEffect} from 'react';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
// UI
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Search from "../../components/Search/Search";
import SendInput from "../../components/SendInput/SendInput";
import Items from "../../components/Items/Items";
import Clear from "../../components/Clear/Clear";
// Style
import {AppStyle} from './App.style'

function App() {
    const useStyles = makeStyles(AppStyle);
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState();
    const [itemsList, setItemsList] = useState([
        {id: 1, text: 'Do 100 JavaScript Projects', star: false, check: false, edit: false},
        {id: 2, text: 'Learn NodeJS', star: false, check: false, edit: false},
        {id: 3, text: 'Learn ReactJS', star: false, check: false, edit: false},
        {id: 4, text: 'Learn GraphQJ', star: false, check: false, edit: false},
    ]);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000)
    }, [])

    const onAddItem = (value) => {
        setItemsList([
            ...itemsList,
            value
        ])
    }

    const onSearch = (searchValue) => {
        setSearchText(searchValue);
    }

    const onChangeItem = (id, mode, value) => {
        let newArray;
        if (mode === 'delete') {
            newArray = filter(itemsList, item => item.id !== id);
        } else {
            newArray = itemsList.map(item => {
                if (item.id === id) {
                    item[mode] = value || !item[mode];
                }
                return item;
            })
        }
        setItemsList(newArray)
    }

    const onClear = () => setItemsList([]);

    const currentList = searchText
        ? filter(itemsList, item => item.text.includes(searchText))
        : itemsList;

    return (
        <div className={classes.container}>
            {isLoading ?
                <header className={classes.title}><CircularProgress color="secondary"/></header>
                : <>
                    <header className={classes.header}>
                        <Typography variant="h4" className={classes.title}>
                            To Do List
                        </Typography>
                        <Search onSearch={onSearch} />
                    </header>
                    <SendInput onAddItem={onAddItem}/>
                    <Items items={sortBy(sortBy(currentList, item => item.check === true), item => item.star === false)}
                           onChangeItem={onChangeItem}
                    />
                    <Clear onClear={onClear}/>
                </>}
        </div>
    );
}

export default App;
