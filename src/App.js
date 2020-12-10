import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage' //pages folder is non reusuable components
import ShopPage from './pages/shop/shop'
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import { receiveUser } from './action/user_action'

import { auth, createUserProfileDocument } from './firebase/firebase.util'



class App extends React.Component {

  //prevent memory leaks
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //checking if database has been updated

        //will send us snapshot - getting data from the user/id comes with reg snapshot
        //.data method returns JSON object of the object
        //,exists returns a boolean if it exists
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
          });
        })
      } else {
        this.props.setCurrentUser(userAuth)

      }
    } 
  )}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch> 
          <Route exact path ="/shop/" component ={ShopPage} />
          <Route exact path ="/signin" render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )
          } />
          <Route exact path ="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setCurrentUser: user => dispatch(receiveUser(user))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
