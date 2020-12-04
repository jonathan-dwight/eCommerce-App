import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage' //pages folder is non reusuable components
import ShopPage from './pages/shop/shop'
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import { auth, createUserProfileDocument } from './firebase/firebase.util'



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
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //checking if database has been updated

        //will send us snapshot - getting data from the user/id comes with reg snapshot
        //.data method returns JSON object of the object
        //,exists returns a boolean if it exists
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(snapShot.data())
          ;
        })
      } else {
        this.setState({ currentUser: userAuth })

      }
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
