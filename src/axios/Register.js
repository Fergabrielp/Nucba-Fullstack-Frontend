import axios from 'axios'
import { API_URL } from "../constants/Constants"


export const register = async (formData) => {
    try {
        await axios.post(`${API_URL}/auth/register`, formData)
        return
    } catch (error) {
        throw new Error("Error trying login", error)
    }
}