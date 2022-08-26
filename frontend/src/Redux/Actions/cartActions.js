import axios from "axios";
import {CART_REMOVE_ITEM} from "../Constants/CartConstants.js"

export const addToCart = (id,qty) => async(dispatch, getState)=>{
    const {data} = await axios.get(`http://localhost:5000/api/products/${id}`)
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: {
            product: data._id,
            name:data.name,
            image:data.price,
            countInStock: data.countInStock,
            qty
        },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}