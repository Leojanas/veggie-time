import {React, Component} from 'react';
import {Link} from 'react-router-dom';
import tokenService from '../Services/token-service';
import './nav.css';

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {login: false}
    }
    handleLogOut = () => {
        tokenService.clearAuthToken();
        this.setState({login: false})
        window.location.reload();
    }
    renderLogOut = () => {
        return (<div id='logout'><button onClick={this.handleLogOut}>Log Out</button></div>)
    }
    renderLogIn = () => {
        return (<Link to='/log-in'>Log In</Link>)
    }
    render() {         
        return(
        <div id='nav-background'>
            <div className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/veggie-list'>Veggie List</Link>
                {/*<Link to='/profile'>Profile</Link>
                    This feature has not yet been implemented*/}
                <Link to='/timeline'>Timeline</Link>

            </div>
            <div className='nav'>
                {tokenService.hasAuthToken()
                    ? this.renderLogOut()
                    : this.renderLogIn()  
                }
            </div>
        </div>
        )
    }
}

export default Nav;