import {React, Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Nav from '../Nav/nav';
import apiService from '../Services/api-service';
import tokenService from '../Services/token-service';

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
            apiService.postLogin(submission)
            .then(response => {
                if(response.body.authToken){
                    this.setState({error: null})
                    tokenService.saveAuthToken(response.body.authToken)
                    this.props.history.push('/')
                }else{
                    this.setState({error: (<div><p>{response.status} Error: {response.body.error.message}</p></div>)})
                }
            })
            .catch(e => console.log(e))
            user_name.value = '';
            password.value = '';
        }
    }
    render() {
        return(
            <div>
                <Nav />
                <div className='form'>
                    <form onSubmit={this.handleLogIn}>
                        <h2>Log In</h2>
                        <label htmlFor='user_name'>User Name:</label>
                        <input required name='user_name' />
                        <br />
                        <label htmlFor='password'>Password:</label>
                        <input required  type='password' name='password' />
                        <br />
                        {this.state.error}
                        <br />
                        <div className='group'>
                            <button type='submit'>Log In</button>
                        </div>
                    </form>
                </div>
                <p className='narrow'>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
                <p className='narrow'>Want to see what's possible without creating an account? </p>
                <p className='narrow'>Feel free to login using the following test credentials to try it out.</p>
                <p className='narrow'>Username: testuser</p>
                <p className='narrow'>Password: testpass</p>
            </div>
        )
    }
}

export default withRouter(LogIn);
