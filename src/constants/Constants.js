const URL_BASE = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const API_URL = 'http://localhost:8081'

const options = (method, token) => {
    return {
        method: method,
        headers: {
            "x-token": token,
        }
    }
};

export { URL_BASE, options, API_URL }
