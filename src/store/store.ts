import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './LoginSlice'

const store = configureStore({
    reducer: {
        login: loginSlice,
    }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch