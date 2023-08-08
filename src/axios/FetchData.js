import axios from 'axios'
import { OPTIONS, URL_BASE } from "../constants/Constants"
import { fetchingAllProducts, fetchingAllProductsFailure, fetchingAllProductsSuccess } from '../redux/reducers/productsReducer/productsSlice'


export const getProductsData = async (dispatch) => {
    dispatch(fetchingAllProducts())
    try {
        const res = await axios.get(URL_BASE, OPTIONS)
        dispatch(fetchingAllProductsSuccess(res.data))
    } catch (error) {
        dispatch(fetchingAllProductsFailure("Error loading Products"))
    }
}

export const getFilteredProducts = async (dispatch, platform, category, sortBy) => {
    dispatch(fetchingAllProducts())
    try {
        const res = await axios.get(`${URL_BASE}?platform=${platform}&category=${category}&sort-by=${sortBy}`, OPTIONS)
        dispatch(fetchingAllProductsSuccess(res.data))
    } catch (error) {
        dispatch(fetchingAllProductsFailure("Error loading Filtered Products"))
    }
}

