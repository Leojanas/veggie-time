import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LogIn from './LogIn/log-in';
import Home from './Home/home';
import SignUp from './SignUp/sign-up';
import VeggieList from './VeggieList/veggie-list';
import Profile from './Profile/profile';
import Timeline from './Timeline/timeline';

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
        { name: 'Radishes', 
        daysUntil: {germination: 7, harvest: 28, thinning: 10}, 
        spacing: {row: 12, plant: 2}, 
        plantDate: null
      },
      { name: 'Carrots',
        daysUntil: {germination: 12, harvest: 35, thinning: 18},
        spacing: {row: 12, plant: 3},
        plantDate: null
      },
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
      ],
      events: [{
        date: new Date(),
        items: [{type: 'planting', completed: false, notes: 'Radishes'}, 
            {type: 'watering', completed: true, notes: 'Whole garden'}],
      }, {
        date: new Date('01-15-2021'),
        items: [{type: 'weeding', completed: false, notes: 'whole garden'}]
      }]
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
            handleRemoveVeggie = {this.handleRemoveVeggie}
          />
        }
      />
      <Route 
        path={'/timeline'}
        render={() => <Timeline events={this.state.events}/>}     
      />
    </main>
  );
  }
}

export default App;
