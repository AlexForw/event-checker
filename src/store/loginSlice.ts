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
        addUser: (state, action) => {
            
        }
    }
})