import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CartState{
    value: number
} 

const initialState : CartState = {
    value : 0
}

const cartReducer = createSlice({
    name:'cartReducer',
    initialState,
    reducers:{
        addCart: (state, action) => {
            state.value = action.payload
        },
        resetCart: (state) => {
            state.value = 0
        }
    }
})

export const {addCart, resetCart} = cartReducer.actions
export const selectValue = (state : RootState) => state.cartReducer

export default cartReducer.reducer