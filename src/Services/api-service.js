import config from '../config';

const apiService = {
    postAuthentication(submission, endpoint){
        return fetch(config.API_BASE_ADDRESS + `/api/auth/${endpoint}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(submission)
        })
        .then(res => {
            let status = res.status;
            return res.json()
            .then(body => {
                return {status: status, body: body}
            })
        })
        .then(response => {
            return response
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
    },
    getGardenVeggies(){
        let jwt = localStorage.getItem('token')
        return fetch(config.API_BASE_ADDRESS + '/api/garden', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwt
            }
        })
        .then(res => res.json())
        .then(response => {
            return response
        })
        .catch(e => e)
    },
    getEvents(){
        let jwt = localStorage.getItem('token')
        return fetch(config.API_BASE_ADDRESS + '/api/events', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwt
            }
        })
        .then(res => res.json())
        .then(response => {
            return response
        })
    }
};

export default apiService;