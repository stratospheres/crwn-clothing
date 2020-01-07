import React, { useState, useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import { HomePage } from './Pages/HomePage/HomePage.component';
import { ShopPage } from './Pages/ShopPage/ShopPage.component';
import { SignInAndSignUpPage } from './Pages/SignInAndSignUpPage/SignInAndSignUpPage.component';
import { Header } from './Components/Header/Header.component';
import { Auth } from './Firebase/Firebase.utils';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null as firebase.User | null);

  useEffect(() => {
    // when App mounts, do this
    const authOnStateChangedFunction = 
      Auth.onAuthStateChanged(user => {
        setCurrentUser(user);

        console.log("User state changed. New User is...");
        console.log(user?.displayName + "," + user?.email);
      });

    // before App unmounts, do this
    return () => {
      if (authOnStateChangedFunction) {
        console.log("Unmounting - removing authOnStateChangedFunction")
        authOnStateChangedFunction();
      }
    }
  });

  return (
    <div>
      <Header User={ currentUser }/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
