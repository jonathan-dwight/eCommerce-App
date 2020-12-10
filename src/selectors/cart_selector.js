import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
// this is a memoized selector

// this allows react not to fully rerrender if this part of state is not changing
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem,) => {
        return acc + cartItem.quantity
    }, 0)
)