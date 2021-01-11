import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LogIn from './LogIn/log-in';
import Home from './Home/home';
import SignUp from './SignUp/sign-up';
import VeggieList from './VeggieList/veggie-list';
import Profile from './Profile/profile';

class App extends Component{
  render(){
  return (
    <main className='App'>
      <Route
        exact path={'/'}
        component={Home} 
      />
      <Route
        path={'/profile'}
        component={Profile} 
      />
      <Route
        path={'/log-in'}
        component={LogIn} 
      />
      <Route
        path={'/sign-up'}
        component={SignUp}
      />
      <Route
        path={'/veggie-list'}
        component={VeggieList}
      />
    </main>
  );
  }
}

export default App;
