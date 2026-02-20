import { configureStore } from "@reduxjs/toolkit";
import { productslice } from "../Slice/ProductSlice";
import { cartSlice } from "../Slice/CartSlice";


export const store = configureStore({
    reducer: {
        products: productslice.reducer,
        cart: cartSlice.reducer
    }
})