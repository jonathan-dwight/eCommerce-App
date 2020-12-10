import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../selectors/cart_selector'
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss'

const CartDropDown = (props) => {

    let cartItems = props.cartItems.map(cartItem => {
        return <CartItem key={cartItem.id} item={cartItem}/>
    })

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropDown);
