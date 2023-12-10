import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartReducer";
import categoryReducer from "../reducer/categoryReducer";


export const store = configureStore({
    reducer:{
        cartReducer : cartReducer,
        categoryReducer : categoryReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch