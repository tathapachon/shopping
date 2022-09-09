import React from "react";
import { PRODUCT_DETAILS_FAIL } from "../../Redux/Constants/ProductConstants";
import { Link } from "react-router-dom";
import "../../screens/name.scss"
export default function CardProduct({id,img,name,price}){
    return(
        <Link className="none" to={"/products/"+id}>
         <div className="cardProduct" >
        
            <img src={img} alt="" height={"400px"} width={"300px"}/>
            <div className="price" >
            <span className="none">{name}</span>
            <span className="none">{price}</span>
            </div>
       
        </div>
         </Link>
       
    )
}