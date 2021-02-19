import {React, Component} from 'react';
import {Link} from 'react-router-dom';
import tokenService from '../Services/token-service';

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {login: false}
    }
    handleLogOut = () => {
        tokenService.clearAuthToken();
        this.setState({login: false})
    }
    renderLogOut = () => {
        return (<button onClick={this.handleLogOut}>Log Out</button>)
    }
    renderLogIn = () => {
        return (<Link to='/log-in'>Log In</Link>)
    }
    render() {         
        return(
            <div>
                <Link to='/'>Home</Link>
                <Link to='/veggie-list'>Veggie List</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/timeline'>Timeline</Link>
                {tokenService.hasAuthToken()
                    ? this.renderLogOut()
                    : this.renderLogIn()  
                }
            </div>

        )
    }
}

export default Nav;