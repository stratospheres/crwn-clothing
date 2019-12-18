import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage/HomePage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>  
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
