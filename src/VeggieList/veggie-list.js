import {React, Component} from 'react';
import Nav from '../Nav/nav';
import ListItem from '../ListItem/list-item';

class VeggieList extends Component {
    render() {
        let itemsArray = this.props.veggies;
        let items = [];
        for(let i=0; i<itemsArray.length; i++){
            let item = <ListItem veggie={itemsArray[i]} key={itemsArray.indexOf(i)} />;
            items.push(item);
        }
        return(
            <div>
                <Nav />
                <h2>Veggie List</h2>
                {items}
                <button>Add Veggie</button>
            </div>
        )
    }
}

export default VeggieList;