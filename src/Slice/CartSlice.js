import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart:[],
        totalCartValue:0
    },
    reducers:{
        addToCart(state,action){

          /* 
             steps to check before we did the incoming item to cart
             1.check whether the item is present in the cart or not.
             2.if present please update it quantity properties only.
               2.1 if to update the product quantity we have to find the product in cart.
               2.2 we will use find array method with array state.cart and check the id of incomingItem and items in state.cart.
               2.3 if we find same id we will update its quantity only.
            3. if incoming item is not present then we will add the incomingItem to cart.
               3.1 while adding to cart we will add new property called quantity as key and 1 as value to incoming property using spread operator.
               3.2 we use spread operator and add new incoming object/item to our cart as written below.
            */


            const incomingItem = action.payload  /* this action is product data while we click on ADD TO CART in productcart */
           
            const existingItem = state.cart.find((i)=> i.id === incomingItem.id)
            console.log("existingItem",existingItem)

            if(existingItem){
                existingItem.quantity += 1
            }else{
                state.cart = [...state.cart, {...incomingItem, quantity:1}]
            }
     },
     deleteItemFromCart(state,action){
        const deleteItemId = action.payload
     const updatedCartItemsAfterDeleteItem = state.cart.filter((dItem)=> dItem.id !== deleteItemId)
                                                     // give me back all the items which are not matching with deleteItemId
      state.cart = [...updatedCartItemsAfterDeleteItem]                                               
     },
     removeAllItemsFromCart(state){
        state.cart = []
     },

     getCartValue(state){
        state.totalCartValue = state.cart.reduce((a,b)=>{
            return a + b.price
        },0)
     }
    }
})

export const {addToCart,getCartValue,deleteItemFromCart,removeAllItemsFromCart} = cartSlice.actions