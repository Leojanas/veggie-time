import {React, Component} from 'react';
import Nav from '../Nav/nav';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    render() {
        return(
            <div>
                <Nav />
                <form>
                    <h2>Sign Up</h2>
                    <label htmlFor='name'>Name:</label>
                    <input name='name' />
                    <label htmlFor='username'>Username:</label>
                    <input name='username' />
                    <label htmlFor='password'>Password:</label>
                    <input name='password' />
                    <label htmlFor='password-repeat'>Repeat Password:</label>
                    <input name='password-repeat' />
                    <button type='submit'>Sign Up</button>
                    </form>
                    <p>Already have an account? <Link to='/log-in'>Log In</Link></p>
            </div>

        )
    }
}

export default SignUp