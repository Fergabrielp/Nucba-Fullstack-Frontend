import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
    token: "",
    isLogged: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        loginUser: (state, action) => {
            state.name = action.payload.userName
            state.email = action.payload.email
            state.token = action.payload.token
            state.isLogged = true
        },
        logoutUser: (state) => {
            state.name = ""
            state.email = ""
            state.token = ""
            state.isLogged = false
        },
    },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer