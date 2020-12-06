import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = (props) => {

    let user = (props.currentUser) ? (
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

const mapStateToProps = (state) => {
    return ({ 
        currentUser: state.user.currentUser 
    })
}

// const mapDispatchToProps = (dispatch) => {
//     // return ({
//     //     recieveCurrentUser:
//     // })
// }

export default connect(mapStateToProps, null)(Header)
