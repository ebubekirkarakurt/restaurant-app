import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CategoryState{
    category:string
}

const initialState : CategoryState = {
    category : 'Toast'
}

const categoryReducer = createSlice({
    name:'categoryReducer',
    initialState,
    reducers:{
        categorySelect: (state, action) =>{
            state.category = action.payload
        }
    }
})

export const {categorySelect} = categoryReducer.actions
export const selectCategory = (state : RootState) => state.cartReducer


export default categoryReducer.reducer