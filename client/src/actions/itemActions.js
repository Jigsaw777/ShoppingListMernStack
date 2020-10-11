import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from "./types";
import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(setItemLoading())
    axios.get('/api/items')
        .then(resp =>
            dispatch({
                type: GET_ITEMS,
                payload: resp.data
            }))
}

export const addItem = newItem => dispatch => {
    dispatch(setItemLoading())
    axios.post('/api/items', newItem)
        .then(resp =>
            dispatch({
                type: ADD_ITEM,
                payload: resp.data
            }))
}

export const deleteItem = id => dispatch => {
    dispatch(setItemLoading())
    axios.delete('/api/items/'+id)
        .then(resp => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
}

export const setItemLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}