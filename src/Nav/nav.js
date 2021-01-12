import {React, Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <div>
                <Link to='/log-in'>Log In</Link>
                <Link to='/'>Home</Link>
                <Link to='/veggie-list'>Veggie List</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/timeline'>Timeline</Link>
            </div>

        )
    }
}

export default Nav;