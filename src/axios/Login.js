import axios from 'axios'
import { API_URL } from "../constants/Constants"

export const login = async (formData) => {
    try {
        const res = await axios.post(`${API_URL}/auth/login`, formData)
        const { user, token } = res.data
        const payload = { ...user, token }
        return { payload }
    } catch (error) {
        throw new Error("Error trying login", error)
    }
}