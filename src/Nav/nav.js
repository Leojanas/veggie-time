import {React, Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../Services/token-service';

class Nav extends Component {
    renderLogOut = () => {
        return (<Link to='/log-in'>Log In</Link>)
    }
    renderLogIn = () => {
        return (<button onClick={TokenService.clearAuthToken}>Log Out</button>)
    }
    render() {         
        return(
            <div>
                <Link to='/'>Home</Link>
                <Link to='/veggie-list'>Veggie List</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/timeline'>Timeline</Link>
                {TokenService.hasAuthToken
                    ? this.renderLogOut()
                    : this.renderLogIn()  
                }
            </div>

        )
    }
}

export default Nav;