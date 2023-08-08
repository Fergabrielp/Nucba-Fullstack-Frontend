import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    detailProduct: [],
    loadingDetail: true,
    errorDetail: false
}

export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        getProductDetail: (state, action) => {

            state.detailProduct = action.payload
            state.loadingDetail = false

        },

        toggleLoading: (state) => {
            state.loadingDetail = !state.loadingDetail
        },

        filterProductsByCategory: (state, action) => {

        },
        sortProducts: (state, action) => {

        },
    },
})

export const { getProductDetail, toggleLoading, filterProductsByPlatform, filterProductsByCategory, sortProducts } = productDetailSlice.actions

export default productDetailSlice.reducer