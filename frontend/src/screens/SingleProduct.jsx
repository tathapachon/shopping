import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import axios from "axios";



const SingleProduct = ({match}) =>{
    const [product, setProduct] = useState({})
    useEffect(()=>{
    const fetchproduct= async ()=>{
        const {data} = await axios.get(`/api/products/${match.params.id}`)
        setProduct(data);
    };
    fetchproduct();
    },[match])
    return(
        <>
        <Header/>
        <div className="container">
            <div>
                <img src={product.image} alt={product.name} height={"400px"}/>
            </div>
            <div>
                <div>
                    <div>{product.name}</div>
                </div>
                <p>{product.description}</p>
                <div>
                    <h6>Price</h6>
                    <span>${product.price}</span>
                </div>
            <div>
            <h6>Status</h6>
            {product.countInStock > 0 ?(
                <span>In Stock</span>
            ):(
                <span>unavailable</span>)}
            </div>
            <div>
                <h6>Reviews</h6>
                <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                />
            </div>
            {product.countInStock > 0 ? (
                <>
                <div>
                    <h6>Quantity</h6>
                    <select>
                        {[...Array(product.countInStock).keys()].map((x)=>(
                            <option key={x+1} value={x+1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </div>
            <button>
                Add To Cart
            </button>
                </>
            ) : null}
            </div>
        </div>

        <div className="container">
            <div>
                <h6>REVIEWS</h6>
                <Message>No Reviews</Message>
                <div>
                    <strong>Admin Doe</strong>
                <Rating/>
            <span>Jan 12 2021</span>
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, 
                voluptates magnam illo quis aliquam ducimus ratione repudiandae autem architecto ipsam quos. Neque deserunt ipsa, maiores culpa quae repellat distinctio veritatis!
            </div>
        </div>
    </div>    
</div>

<div className="container">
    <h6>WRITE A CUSTOMER REVIEW</h6>
    <form>
        <div>
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

    <div>
        <Message>
            Please{" "}
            <Link to="/login">
            " <strong>Login</strong>"
            </Link>{" "}
            to write a review{" "}
        </Message>
    </div>
</div>
        </>
    )
}

export default SingleProduct;