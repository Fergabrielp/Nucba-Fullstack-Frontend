import axios from 'axios'
import { API_URL } from "../constants/Constants"

export const verify = async (email, code) => {
    try {
        await axios.patch(`${API_URL}/auth/verify`, { email, code })
    } catch (error) {
        throw new Error("Error trying verifying code", error)
    }
}