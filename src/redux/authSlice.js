import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    token: '',
    user: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication(state, action) {
            state.isAuthenticated = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

export const { setAuthentication, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;