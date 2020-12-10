export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";

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