import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type User = {
    name: string;
    password: string | number;
    check: boolean;
}


const initialState: User = {
    name: '',
    password: '',
    check: false,
}
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        checkUser: (state, action: PayloadAction<string | number>) => {
            (action.payload.name === state.name
                && action.payload.password === state.password)
                ? state.check = true : state.check = false
        }
    }
})

export const {checkUser} = loginSlice.actions

export default loginSlice.reducer