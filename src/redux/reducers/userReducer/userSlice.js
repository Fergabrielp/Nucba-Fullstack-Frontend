import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: "",
    name: "",
    email: "",
    isLogged: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        loginUser: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.data().userName
            state.email = action.payload.data().email
            state.isLogged = true
        },
        logoutUser: (state) => {
            state.id = ""
            state.name = ""
            state.email = ""
            state.isLogged = false
        },
    },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer