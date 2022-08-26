import {CART_ADD_ITEM} from "../Constants/CartConstants.js"

export const cartReducer =  (state= {cartItem:[]},action)=>{
    switch(action.type){
      case CART_ADD_ITEM:
        const item= action.payload;
        const existItem = state.cartItem.find((x)=> x.product === item.product);
        if(existItem){
            return{
                ...state,
                cartItems: state.cartItems.map((x)=>
                x.product === existItem.product ? item:x
                )
            }
        }else{
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    (x)=> x.product !== action.payload
                )
            }
        }
     default:
        return state;
    }
}