import axios from 'axios'
import { API_URL, options } from "../constants/Constants"

export const getProducts = async (token) => {
    try {
        const res = await axios.get(`${API_URL}/product/all`, options("GET", token))
        return res.data.data
    } catch (error) {
        throw new Error("Error trying getting Products", error)
    }
}

export const getMyProducts = async (token) => {
    try {
        const res = await axios.get(`${API_URL}/product/`, options("GET", token))
        return res.data.data
    } catch (error) {
        throw new Error("Error trying getting Products", error)
    }
}

export const createMyProduct = async (token, product) => {
    try {
        await axios.post(`${API_URL}/product/`, product, options("POST", token))
        return
    } catch (error) {
        throw new Error("Error trying creating Product", error)
    }
}

export const getOneProduct = async (token, id) => {
    try {
        const res = await axios.get(`${API_URL}/product/${id}`, options("GET", token))
        return res.data.product
    } catch (error) {
        throw new Error("Error trying getting Product", error)
    }
}

export const editMyProduct = async (token, id, update) => {
    try {
        await axios.put(`${API_URL}/product/${id}`, update, options("PUT", token))
        return
    } catch (error) {
        throw new Error("Error trying editting Products", error)
    }
}


export const deleteMyProduct = async (token, id) => {
    try {
        await axios.delete(`${API_URL}/product/${id}`, options("DELETE", token))
        return
    } catch (error) {
        throw new Error("Error trying deleting Products", error)
    }
}