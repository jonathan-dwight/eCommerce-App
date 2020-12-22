import { FETCH_COLLECTIONS_FAIL, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from '../action/shop_action';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: 
            return state;
    }   
}

export default shopReducer;