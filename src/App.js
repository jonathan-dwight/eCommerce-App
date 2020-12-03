import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage' //pages folder is non reusuable components
import ShopPage from './pages/shop/shop'
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import { auth } from './firebase/firebase.util'



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  //prevent memory leaks
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    }
  )}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch> 
          <Route exact path ="/shop/" component ={ShopPage} />
          <Route exact path ="/signin" component={SignInAndSignUp} />
          <Route exact path ="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
