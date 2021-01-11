import {React, Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Nav/nav';

class LogIn extends Component {
    render() {
        return(
            <div>
                <Nav />
            <form>
                <h2>Log In</h2>
                <label htmlFor='username'>User Name:</label>
                <input name='username' />
                <label htmlFor='password'>Password:</label>
                <input name='password' />
                <button type='submit'>Log In</button>
            </form>
            <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
            </div>
        )
    }
}

export default LogIn;
