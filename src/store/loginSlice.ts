import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type User = {
    name: string;
    password: string;
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
        checkUser: (state, action: PayloadAction<object>) => {
            console.log(action.payload.name);
            (action.payload.name === state.name
                && action.payload.password === state.password)
                ? state.check = true : state.check = false
        }
    }
})

export const { checkUser } = loginSlice.actions

export default loginSlice.reducer