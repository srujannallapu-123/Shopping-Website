import { createSlice } from "@reduxjs/toolkit";


export const productslice = createSlice({
    name: "products",
    initialState:{
        products:[]
    },
    reducers:{
        getProduct(state,action){
            state.products = action.payload
        }
    }
})

export const {getProduct} = productslice.actions