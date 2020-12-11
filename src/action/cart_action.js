export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const toggleCart = () => {
    return {
        type: TOGGLE_CART_HIDDEN
    }
}

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload
    }
}

export const clearItemFromCart = (payload) => {
    return {
        type: CLEAR_ITEM_FROM_CART,
        payload
    }
}

export const removeItem = (payload) => {
    return {
        type: REMOVE_ITEM,
        payload
    }
}