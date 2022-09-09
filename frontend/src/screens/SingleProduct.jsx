import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import Loading from "./../components/LoadingError/Loading"
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../Redux/Actions/ProductActions.js";
import "./SingleProduct.scss"



const SingleProduct = ({history, match }) => {
    const [qty,setQty]= useState(1)

    const productId = match.params.id;
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails;

    console.log(productDetails)
    useEffect(() => {
        dispatch(listProductDetails(productId))
    }, [dispatch, productId])

    const AddToCartHandle= (e) =>{
        e.preventDefault()
       history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (
        <>
            <Header />
            <div>
                {
                    loading ? (
                        <Loading />

                    )
                        : error ? (
                            <Message varient="alert-danger">{error}</Message>
                        ) : (
                            <>

                              <div className="containerDetail">
                                    <div>
                                        <img src={product.image} alt={product.name} height={"400px"} />
                                    </div>   
                                   

                                    <div className="descriptionDetail">
                                        <div>
                                            <div>{product.name}</div> 
                                            <p>{product.description}</p>
                                        </div>
                                        <div >
                                        <div className="detail">
                                            <div >Price </div>
                                            <span className="space"> ${product.price}</span>
                                        </div>
                                        <div className="detail">
                                            <div>Status </div>
                                            {product.countInStock > 0 ? (
                                                <span className="space">In Stock</span>
                                            ) : (
                                                <span className="space">unavailable</span>)}
                                        </div>
                                        <div className="detail">
                                            <div>Reviews </div>
                                            <Rating
                                                value={product.rating}
                                                text={`${product.numReviews} reviews`}
                                                
                                            />
                                        </div>
                                        {product.countInStock > 0 ? (
                                            <>
                                                <div className="detail">
                                                    <div>Quantity </div>
                                                    <select value={qty}
                                                    onChange={(e)=> setQty(e.target.value)}
                                                    className="space">
                                                        {[...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <button onClick={AddToCartHandle}>
                                                    Add To Cart
                                                </button>
                                            </>
                                        ) : null}
                                        </div>
                                      
                                     
                                    </div>
                                </div>
                      
                                
                           

                                <div className="container">
                            
                                 
                                 <h6>REVIEWS</h6>                             
                                 <Rating />
                                 
                                 
                             
                        
                                    <form>
                                        <div>
                                        <h6>WRITE A CUSTOMER REVIEW</h6>
                                            <strong>Rating</strong>
                                            <select>
                                                <option value="">Select...</option>
                                                <option value="1">1- Poor</option>
                                                <option value="2">2- Fair</option>
                                                <option value="3">3- Good</option>
                                                <option value="4">4- Very Good</option>
                                                <option value="5">5- Excellent</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <strong>Comment</strong>
                                            <textarea rows="3"></textarea>
                                        </div>
                                        <div>
                                            <button>
                                                SUBMIT
                                            </button>
                                        </div>
                                    </form>

                                  
                                   
                                </div> 
                

                            </>
                        )
                }
            </div>
        </>
    )
}

export default SingleProduct;