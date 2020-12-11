import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../selectors/cart_selector';
import { selectCurrentUser } from '../../selectors/user_selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = (props) => {

    let user = (props.currentUser) ? (
        <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
    ) : (
        <OptionLink to="/signin">Sign In</OptionLink>
    )

    let cart = (!props.hidden) ?  <CartDropDown />  : null

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink> 
                {/* will change later to github and linkedIn */}
                {user}
                <CartIcon />
            </OptionsContainer>
            {cart}
        </HeaderContainer>
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
