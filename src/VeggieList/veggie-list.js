import {React, Component} from 'react';
import Nav from '../Nav/nav';
import ListItem from '../ListItem/list-item';
import apiService from '../Services/api-service';

class VeggieList extends Component {
    constructor(props){
        super(props);
        this.state = {addVeggiePressed: false, veggieToAdd: null, allVeggies: []}
    }
    componentDidMount() {
        apiService.getAllVeggies()
            .then(veggies => {
                this.setState({allVeggies: veggies})
            })
    }
    toggleAddVeggie = () => {
        this.setState({addVeggiePressed: true, veggieToAdd: this.state.allVeggies[0]})
    }
    handleAddVeggie = () => {
        this.props.handleAddVeggie(this.state.veggieToAdd);
        this.setState({addVeggiePressed: false, veggieToAdd: null})
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
        let itemsArray = this.props.veggies;
        let items = [];
        for(let i=0; i<itemsArray.length; i++){
            let item = <ListItem 
                veggie={itemsArray[i]} 
                key={i} 
                index={i} 
                setPlantDate={this.props.setPlantDate} 
                handleRemoveVeggie={this.props.handleRemoveVeggie}
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