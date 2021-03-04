import {React, Component} from 'react';
import {withRouter} from 'react-router-dom';
import Nav from '../Nav/nav';
import tokenService from '../Services/token-service';
import ZoneMap from './zone-map';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPopUp: false
        };
    }
    componentDidMount() {
        if(tokenService.getAuthToken() === null){
            this.props.history.push('/log-in');
        }
    }
    togglePopUp = () => {
        this.setState({showPopUp: !this.state.showPopUp});
    }
    render() {
        return(
            <div>
                <Nav />
                <h2>Profile</h2>
                <section>
                    <h3>Hardiness Zone</h3>
                    <p>Please select your hardiness zone below to customize the recommended planting 
                        dates for your vegetables.  If you aren't sure about your zone, please use the 
                        link provided to view a map to assist you in determining the proper zone.
                    </p>
                <label htmlFor='hardiness-zone'>Hardiness Zone: </label>
                <select name='hardiness-zone'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>

                </select>
                <label htmlFor='hardiness-zone'> Not Sure? <button onClick={this.togglePopUp}>Map</button></label>
                </section>
                {this.state.showPopUp 
                    ? <ZoneMap togglePopUp={this.togglePopUp}/>
                    : null
                }

            </div>
        )
    }
}

export default withRouter(Profile);