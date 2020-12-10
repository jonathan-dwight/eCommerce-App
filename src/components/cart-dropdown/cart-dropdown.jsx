import React from 'react';
import { connect} from 'react-redux';
import { Link, withRouter  } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../selectors/cart_selector'
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { toggleCart } from '../../action/cart_action'

import './cart-dropdown.scss'

const CartDropDown = (props) => {

    let cartItems;
    
    props.cartItems.length ? cartItems = (props.cartItems.map(cartItem => {
        return <CartItem key={cartItem.id} item={cartItem}/>
    })
    ) : (
        cartItems = <span className="empty-message">Your cart is empty</span>
    )

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems}
            </div>
            <Link to='/checkout'>
                <CustomButton onClick={() => props.toggleCartHidden()}>
                    GO TO CHECKOUT</CustomButton>   
            </Link>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCart())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));
