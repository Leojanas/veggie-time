import {React, Component} from 'react';
import './zone-map.css';
import map from '../images/zone-map.png';

class ZoneMap extends Component {
    render() {
        return(
            <div className='pop-up'>
                <div className='pop-up-content'>
                <img src={map} alt="Zone Map" width='100%'/>
                <button onClick={this.props.togglePopUp}>Close Map</button>
                </div>
            </div>
        )
    }
}

export default ZoneMap;