import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.util'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss';

const Header = ({ currentUser }) => {

    let user = (currentUser) ? (
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
    ) : (
        <Link className="option" to="/signin">Sign In</Link>
    )

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
            </div>
        </div>
    )
}

export default Header
