import {React, Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Nav from '../Nav/nav';
import apiService from '../Services/api-service';

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }
    handleLogIn = (event) => {
        event.preventDefault();
        const { user_name, password } = event.target;
        if(!user_name.value || !password.value){
            this.setState({error: (<div><p>Error: must fill out all fields.</p></div>)})
        }else{
            let submission = {username: user_name.value, password: password.value}
            apiService.sendLogIn(submission)
            .then(jwt => {
                this.props.saveToken(jwt)
                this.props.history.push('/')
            })
            user_name.value = '';
            password.value = '';
        }


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

export default withRouter(LogIn);
