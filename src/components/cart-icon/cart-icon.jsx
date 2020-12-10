import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../action/cart_action';
import { selectCartItemsCount } from '../../selectors/cart_selector'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden} >
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapStateToProps = (state) => {
    // this is called a selector -- could be useSelector??
    return {
        itemCount: selectCartItemsCount(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);