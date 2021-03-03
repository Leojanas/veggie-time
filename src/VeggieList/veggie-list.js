import {React, Component} from 'react';
import Nav from '../Nav/nav';
import ListItem from '../ListItem/list-item';
import apiService from '../Services/api-service';

class VeggieList extends Component {
    constructor(props){
        super(props);
        this.state = {addVeggiePressed: false, veggieToAdd: null, allVeggies: [], gardenVeggies: []}
    }
    componentDidMount() {
        apiService.getAllVeggies()
            .then(veggies => {
                this.setState({allVeggies: veggies})
            });
        this.getGardenVeggies();
    }
    getGardenVeggies = () => {
        apiService.getGardenVeggies()
            .then(response => {
                if(response.status === 200){
                    this.setState({gardenVeggies: response.body})
                }else{
                }
            })
    }
    toggleAddVeggie = () => {
        this.setState({addVeggiePressed: true, veggieToAdd: this.state.allVeggies[0]})
    }
    handleRemoveVeggie = (index) => {
        apiService.removeGardenVeggie(this.state.gardenVeggies[index])
        .then(response => {
            if(response.status === 204){
                let gardenVeggies = this.state.gardenVeggies;
                gardenVeggies.splice(index, 1);
                this.setState({gardenVeggies});
            }

        })

    }
    handleAddVeggie = () => {
        apiService.addGardenVeggie({veggie_id: this.state.veggieToAdd.id})
        .then(res => {
            let veggie = res.body;
            let veggies = this.state.gardenVeggies;
            veggies.push(veggie);
            this.setState({addVeggiePressed: false, veggieToAdd: null, gardenVeggies: veggies})
        })
    }
    setPlantDate = (date, index) => {
        let dateObject = {plant_date: date}
        apiService.patchGardenVeggie(this.state.gardenVeggies[index], dateObject)
        .then(response => {
            if(response.status === 204){
                let veggie = this.state.gardenVeggies[index];
                veggie.plant_date = date;
                this.getGardenVeggies();
            }
        })
    }
    handleChangeSelect = (event) => {
        let veggieToAdd = event.target.value;
        let veggie = this.state.allVeggies.filter(v => v.name === veggieToAdd)[0];
        this.setState({veggieToAdd: veggie})
    }
    render() {
        let addVeggie;
        if(this.state.addVeggiePressed){
            let options = [];
            for(let i=0; i<this.state.allVeggies.length; i++){
                options.push(<option value={this.state.allVeggies[i].veggie_name} key={i}>{this.state.allVeggies[i].veggie_name}</option>)
            }
            addVeggie = (
                <div>
                    <select onChange={this.handleChangeSelect} defaultValue={this.state.allVeggies[0].veggie_name}>
                        {options}
                    </select>
                    <button type='button' onClick={this.handleAddVeggie}>Add Veggie</button>
                </div>
            )
        }else{
            addVeggie = (
                <button type='button' onClick={this.toggleAddVeggie}>Add Veggie</button>
            )
        }
        let itemsArray = this.state.gardenVeggies;
        let items = [];
        for(let i=0; i<itemsArray.length; i++){
            let item = <ListItem 
                veggie={itemsArray[i]} 
                key={i} 
                index={i}
                handleRemoveVeggie={this.handleRemoveVeggie}
                setPlantDate={this.setPlantDate} 
            />;
            items.push(item);
        }
        return(
            <div>
                <Nav />
                <h2>Veggie List</h2>
                {items}
                {addVeggie}
            </div>
        )
    }
}

export default VeggieList;