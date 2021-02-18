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
                return response.authToken
        })
        .catch(e => {
            return e
        })
    },
    sendLogIn(submission){
        return fetch(config.API_BASE_ADDRESS + '/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(submission)
        })
        .then(res => res.json())
        .then(response => {
            return response.authToken     
        })
        .catch(e => {
            return e
        })
    },
    getAllVeggies(){
        return fetch(config.API_BASE_ADDRESS + '/api/allVeggies', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(response => {
            return response
        })
    }
};

export default apiService;