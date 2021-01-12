import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LogIn from './LogIn/log-in';
import Home from './Home/home';
import SignUp from './SignUp/sign-up';
import VeggieList from './VeggieList/veggie-list';
import Profile from './Profile/profile';

class App extends Component{
  constructor(props){
    super(props)
    let date = new Date('4-15-2021')
    this.state = {
      veggies: [
        { name: 'Radishes', 
          daysUntil: {germination: 7, harvest: 28, thinning: 10}, 
          spacing: {row: 12, plant: 2}, 
          plantDate: date
        },
        { name: 'Carrots',
          daysUntil: {germination: 12, harvest: 35, thinning: 18},
          spacing: {row: 12, plant: 3},
          plantDate: null
        }
      ],
      allVeggies: [
        { name: 'Beets', 
          daysUntil: {germination: 7, harvest: 28, thinning: 10}, 
          spacing: {row: 12, plant: 2}, 
          plantDate: null
        },
        { name: 'Turnips',
          daysUntil: {germination: 12, harvest: 35, thinning: 18},
          spacing: {row: 12, plant: 3},
          plantDate: null
        }
      ]
    }
  }
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
        render={() => 
          <VeggieList 
            veggies={this.state.veggies}
            allVeggies={this.state.allVeggies}
            setPlantDate = {this.setPlantDate}
            handleAddVeggie = {this.handleAddVeggie}
          />
        }
      />
    </main>
  );
  }
}

export default App;
