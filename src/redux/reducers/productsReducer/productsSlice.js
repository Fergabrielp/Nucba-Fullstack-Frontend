import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    loading: false,
    error: null,
    productsFound: [],
    isSearching: false,
    limit: 10
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

        fetchingAllProducts: (state) => {
            return {
                ...state,
                loading: true
            }
        },

        fetchingAllProductsSuccess: (state, action) => {
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        },

        fetchingAllProductsFailure: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        getsProductsFound: (state, action) => {
            return {
                ...state,
                productsFound: action.payload,
                loading: false,
                isSearching: true
            }
        },

        toggleIsLoading: (state, action) => {
            state.loading = action.payload
        },

        toggleIsSearching: (state, action) => {
            state.isSearching = action.payload
        },

        increaseLimit: (state) => {
            state.limit += 20
        },

        resetLimit: (state) => {
            state.limit = 20
        },

    },
})

export const { getsProductsFound, toggleIsLoading, toggleIsSearching, fetchingAllProducts, fetchingAllProductsSuccess, fetchingAllProductsFailure, increaseLimit, resetLimit } = productsSlice.actions

export default productsSlice.reducer