import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LogIn from './LogIn/log-in';
import Home from './Home/home';
import SignUp from './SignUp/sign-up';
import VeggieList from './VeggieList/veggie-list';
import Profile from './Profile/profile';
import Timeline from './Timeline/timeline';

class App extends Component{

  setPlantDate = (date, veggie) => {
      let index = this.state.veggies.findIndex(v => v.name === veggie);
      let newVeggie = this.state.veggies[index];
      newVeggie.plantDate = date;
      this.setState({...this.state.veggies, newVeggie})
  }
  handleAddVeggie = (veggie) => {
    let veggies = this.state.veggies;
    veggies.push(veggie);
    this.setState({veggies: veggies})
  }
  handleRemoveVeggie = (index) => {
    let veggies = [];
    for(let i=0; i<this.state.veggies.length; i++){
      if(index !== i){
        veggies.push(this.state.veggies[i])
      }
    }
    this.setState({veggies: veggies})
  }
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
        render={() => 
          <LogIn />
        } 
      />
      <Route
        path={'/sign-up'}
        render={() => 
          <SignUp />
        }
      />
      <Route
        path={'/veggie-list'}
        render={() => 
          <VeggieList 
            setPlantDate = {this.setPlantDate}
            handleAddVeggie = {this.handleAddVeggie}
            handleRemoveVeggie = {this.handleRemoveVeggie}
          />
        }
      />
      <Route 
        path={'/timeline'}
        render={() => <Timeline />}     
      />
    </main>
  );
  }
}

export default App;
