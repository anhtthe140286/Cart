import _ from 'lodash';
import {
    FETCH_USER_ITEMS,
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_ITEMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state;
    }
}