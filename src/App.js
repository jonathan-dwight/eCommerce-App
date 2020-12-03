import React from 'react';
import './App.css';
import HomePage from './pages/homepage' //pages folder is non reusuable components

import { Route, Switch } from 'react-router-dom'

const HatsPage = () => {
  return (
    <div>
        <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch> 
        <Route exact path ="/shop/hats" component ={HatsPage} />
        <Route exact path ="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
