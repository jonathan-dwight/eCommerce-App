import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../selectors/cart_selector'
import CheckOutItem from '../../components/checkout-item/checkout_item'
import StripeCheckoutButton from '../stripe-button/stripe-button';

import './checkout.scss'

const CheckOut = ({ cartItems, total }) => {

    let items = cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    })
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {items}

            <div className='total'>
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments
                <br />
                4242 4242 4242 4242 - Exp:  11/29 - CVV: 123
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOut);