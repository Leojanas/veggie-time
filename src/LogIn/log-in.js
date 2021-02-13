import {React, Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Nav/nav';
import TokenService from '../Services/token-service';

class LogIn extends Component {
    handleLogIn = (event) => {
        event.preventDefault();
        const { user_name, password } = event.target;
        TokenService.saveAuthToken(TokenService.makeBasicAuthToken({user_name, password}));

        user_name.value = '';
        password.value = '';
    }
    render() {
        return(
            <div>
                <Nav />
            <form onSubmit={this.handleLogIn}>
                <h2>Log In</h2>
                <label htmlFor='user_name'>User Name:</label>
                <input required name='user_name' />
                <label htmlFor='password'>Password:</label>
                <input required name='password' />
                <button type='submit'>Log In</button>
            </form>
            <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
            </div>
        )
    }
}

export default LogIn;
