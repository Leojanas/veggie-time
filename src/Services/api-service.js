import config from '../config';

const apiService = {
    postSignUp(submission){
        return fetch(config.API_BASE_ADDRESS + '/api/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(submission)
        })
        .then(res => res.json())
        .then(response => {
                console.log(response) 
                return response.authToken
        })
    },
    sendLogIn(submission){
        return fetch(config.API_BASE_ADDRESS + '/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(submission)
        })
        .then(res => res.json())
        .then(response => 
            {
            if(!response.ok){
                console.log(response.status)
                console.log(response.body)
            }else{
                console.log(response.body.authToken)
                return response.body.authToken
            }
        })
    }
};

export default apiService;