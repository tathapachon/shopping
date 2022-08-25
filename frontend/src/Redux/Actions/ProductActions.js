import axios from "axios";
import {
    PRODUCT_lIST_FAIL, 
    PRODUCT_lIST_REQUEST, 
    PRODUCT_lIST_SUCCESS,
    PRODUCT_DETAILS_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS,
} from "../Constants/ProductConstants";

   

export const listProduct = () => async(dispatch) =>{
    try {
        dispatch({type:PRODUCT_lIST_REQUEST});
        
        const {data} = await axios.get("http://localhost:5000/api/products");
    
        dispatch({ type: PRODUCT_lIST_SUCCESS, payload: data})
    } catch( error ){
        dispatch({
            type: PRODUCT_lIST_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
}

export const listProductDetails = (id) => async(dispatch) =>{
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST});
        
        const {data} = await axios.get(`http://localhost:5000/api/products/${id}`);
    
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch( error ){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
}