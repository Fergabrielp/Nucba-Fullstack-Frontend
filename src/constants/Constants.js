const URL_BASE = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const API_URL = 'https://nucba-fullstack-backend.vercel.app'

const options = (method, token) => {
    return {
        method: method,
        headers: {
            "x-token": token,
        }
    }
};

export { URL_BASE, options, API_URL }
