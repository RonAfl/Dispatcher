import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    email: string;
    isLoggedIn: boolean;
    errMessage: string;
    
}

const initialState: AuthState = {
    email: '',
    isLoggedIn: false,
    errMessage: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.isLoggedIn = true;
            state.errMessage = '';
        },
        signup: state => {
            state.errMessage = '';
        },
        logout: state => {
            state.isLoggedIn = false;
            state.errMessage = '';
        },
    },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
