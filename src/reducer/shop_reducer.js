import { UPDATE_COLLECTIONS } from '../action/shop_action';

const INITIAL_STATE = {
    collections: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default: 
            return state;
    }   
}

export default shopReducer;