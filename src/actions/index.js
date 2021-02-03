import items from '../api/items';
import cart from '../api/items';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_ITEMS,
    FETCH_ITEM,
    CREATE_ITEM,
    EDIT_ITEM,
    DELETE_ITEM,
    CLEAR_USER_ITEMS,
    FETCH_USER_ITEMS
} from './types';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}


export const fetchItem = (id) => async dispatch => {
    const response = await items.get(`./items/${id}`);
    dispatch({type: FETCH_ITEM, payload: response.data});
}

export const createItem = (formValues) => async dispatch => {
    const response = await items.post('/items/', {...formValues});
    dispatch({type: CREATE_ITEM, payload: response.data});
    history.push('/');
}

export const editItem = (id, formValues) => async dispatch => {
    const response = await items.patch(`./items/${id}`, formValues);
    dispatch({type: EDIT_ITEM, payload: response.data});
    history.push('/');
}

export const deleteItem = (id) => async dispatch => {
    await items.delete(`./items/${id}`);
    dispatch({type: DELETE_ITEM, payload: id});
    history.push('/')
}

// export const addToCart = (userId, formValues) => async dispatch => {
//     const response = await items.post('/cart/', { formValues });
//     dispatch({ type: ADD_TO_CART, payload: response.data });
//     history.push('/');
// }

export const fetchUserItems = (userId) => async dispatch => {
    const response = await cart.get(`./cart?userId=${userId}`);
    dispatch({type: FETCH_USER_ITEMS, payload: response.data});
}


export const fetchItems = () => async dispatch => {
    const response = await items.get('/items');
    dispatch({type: FETCH_ITEMS, payload: response.data});
}
