import { createSlice } from '@reduxjs/toolkit'
import { addItems, substracOnetItem } from '../../../utils/cartFunctions'


const initialState = {
    cart: [],
    quantity: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            return {
                ...state,
                cart: addItems(state.cart, action.payload),
                quantity: state.quantity + 1
            }

        },
        deleteProductFromCart: (state, action) => {

            const item = state.cart.find(item => item.id === action.payload)

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                quantity: state.quantity - item.quantity

            }
        },
        substractItem: (state, action) => {
            return {
                ...state,
                cart: substracOnetItem(state.cart, action.payload),
                quantity: state.quantity - 1

            }
        },

        deleteAllProductsFromCart: (state) => {
            return {
                ...state,
                cart: [],
                quantity: 0
            }
        },
    },
})

export const { addProductToCart, deleteProductFromCart, substractItem, deleteAllProductsFromCart } = cartSlice.actions

export default cartSlice.reducer