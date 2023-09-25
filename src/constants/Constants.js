const API_URL = 'https://nucba-fullstack-backend.vercel.app'
// const API_URL = 'http://localhost:8081'

const options = (method, token) => {
    return {
        method: method,
        headers: {
            "x-token": token,
        }
    }
};

export { options, API_URL }
