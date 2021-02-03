import _ from 'lodash';
import {
    FETCH_USER_ITEMS,
    CLEAR_USER_ITEMS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_ITEMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case CLEAR_USER_ITEMS:
            return {};
        default:
            return state;
    }
}
