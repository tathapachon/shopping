import {
    PRODUCT_lIST_FAIL,
    PRODUCT_lIST_REQUEST,
    PRODUCT_lIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../Constants/ProductConstants.js"


// PRODUCT LIST
export const productListReducer = (state = {products:[]}, action) =>{

    switch(action.type){
        
        case PRODUCT_lIST_REQUEST:
            return {loading: true, products: []};
        case PRODUCT_lIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_lIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
            
    }
}

// SINGLE PRODUCT

export const productDetailsReducer = (state = {product:{ reviews: []}}, action) =>{

    switch(action.type){
        
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
            
    }
}