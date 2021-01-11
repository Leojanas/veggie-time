import {React, Component} from 'react';

class ListItem extends Component {
    render() {
        return(
        <p>This is list item {this.props.number}</p>
        )
    }
}

export default ListItem;