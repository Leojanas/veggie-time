

const tokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem('token', token)
    },
    getAuthToken() {
        return window.localStorage.getItem('token')
    },
    clearAuthToken() {
        return window.localStorage.removeItem('token')
    },
    hasAuthToken() {
        return !!this.getAuthToken()
    },
};

export default tokenService;