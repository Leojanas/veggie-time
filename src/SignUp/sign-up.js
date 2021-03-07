import {React, Component} from 'react';
import Nav from '../Nav/nav';
import {Link, withRouter} from 'react-router-dom';
import apiService from '../Services/api-service';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }
    verifySignUp = (event) => {
        event.preventDefault();
        let {name, username, password, password_repeat} = event.target;
        if(!name.value || !username.value || !password.value){
            this.setState({error: (<div>
                <p>Error: Must fill out all fields.</p>
            </div>)})
        }else if(password.value !== password_repeat.value){
            this.setState({error: (<div>
                <p>Error: Passwords must match.</p>
            </div>)})
        }else{
            let submission = {name: name.value, username: username.value, password: password.value};
            name.value = '';
            username.value = '';
            password.value = '';
            password_repeat.value = '';
            apiService.postSignup(submission)
            .then(response => {
                if(response.status === 201){
                    this.props.history.push('/log-in')
                }else{
                    this.setState({error: (<div><p>Error: {response.body.error.message}</p></div>)})
                }
            })
            .catch(e => console.log(e))
        }
    }
    render() {
        return(
            <div>
                <Nav />
                <div className='form'>
                    <form  id='sign-up' onSubmit={this.verifySignUp}>
                        <h2>Sign Up</h2>
                        <label htmlFor='name'>Name:</label>
                        <input name='name' />
                        <br />
                        <label htmlFor='username'>Username:</label>
                        <input name='username' />
                        <br />
                        <label htmlFor='password'>Password:</label>
                        <input name='password' />
                        <br />
                        <label htmlFor='password_repeat'>Repeat Password:</label>
                        <input name='password_repeat' />
                        <br />
                        {this.state.error}
                        <br />
                        <div className='group'>
                            <button type='submit'>Sign Up</button>
                        </div>
                    </form>
                </div>
                <p className='narrow'>Already have an account? <Link to='/log-in'>Log In</Link></p>
            </div>

        )
    }
}

export default withRouter(SignUp);