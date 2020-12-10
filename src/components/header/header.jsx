import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../selectors/cart_selector';
import { selectCurrentUser } from '../../selectors/user_selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = (props) => {

    let user = (props.currentUser) ? (
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
    ) : (
        <Link className="option" to="/signin">Sign In</Link>
    )

    let cart = (!props.hidden) ?  <CartDropDown />  : null

    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link> 
                {/* will change later to github and linkedIn */}
                {user}
                <CartIcon />
            </div>
            {cart}
        </div>
    )
}

// {user: {currentUser }, cart: {hidden}}
// this will pass in the state
const mapStateToProps = createStructuredSelector({ 
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// const mapDispatchToProps = (dispatch) => {
//     // return ({
//     //     recieveCurrentUser:
//     // })
// }

export default connect(mapStateToProps, null)(Header)
