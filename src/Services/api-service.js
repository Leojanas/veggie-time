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
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(res => {
            return res.json()
            .then(body => {
                return {status: res.status, body: body}
            })
        })
        .then(response => {
            return response
        })
    },
    getEvents(){
        let jwt = localStorage.getItem('token')
        return fetch(config.API_BASE_ADDRESS + '/api/events', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(res => {
            return res.json()
            .then(body => {
                return {status: res.status, body: body}
            })
        })
        .then(response => {
            return response
        })
    },
    addGardenVeggie(veggie){
        console.log(veggie)
        let jwt = localStorage.getItem('token')
        return fetch(config.API_BASE_ADDRESS + '/api/garden', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(veggie)
        })
        .then(res => {
            return res.json()
            .then(body => {
                return {status: res.status, body: body}
            })
        })
    },
    removeGardenVeggie(veggie){
        console.log(veggie);
        let id = veggie.id;
        let jwt = localStorage.getItem('token');
        let string = `/api/garden/${id}`;
        return fetch(config.API_BASE_ADDRESS + string, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
    },
    patchGardenVeggie(veggie, date){
        let id = veggie.id;
        let jwt = localStorage.getItem('token');
        let string = `/api/garden/${id}`;
        return fetch(config.API_BASE_ADDRESS + string, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(date)
        })
    },
    addEvent(event){
        let jwt = localStorage.getItem('token');
        console.log(event)
        return fetch(config.API_BASE_ADDRESS + '/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(event)
        })
        .then(res => {
            console.log(res)
            return res.json()
            .then(body => {
                return {status: res.status, body: body}
            })
        })
    },
    patchEvent(id){
        let jwt = localStorage.getItem('token');
        let string = `/api/events/${id}`;
        return fetch(config.API_BASE_ADDRESS + string, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({completed: true})
        })
    }
};

export default apiService;