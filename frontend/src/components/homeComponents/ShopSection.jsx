import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch, useSelector} from "react-redux";
import { listProduct} from "../../Redux/Actions/ProductActions.js"
import CardProduct from "./CardProduct";

const ShopSection = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList);
    const { loading, error, products} = productList;


    useEffect(()=>{
     dispatch(listProduct());
    }, [dispatch])

    console.log("holaa",products)
    return (
        <>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 article" >
                            <div className="shopcontainer" >
                                {
                                    loading ? (
                                    <p>Loading...</p>
                                    ): error ? (
                                      <p>Error : {error}</p>
                                    ) : (
                                        <>
                                             {
                                   products?.map((product) =>{
                                    return <CardProduct
                                  id={product._id}
                                  name={product.name}
                                  img={product.image}
                                  price={product.price}
                                    />
                                   }
                                   )}
                                        </>
                                    )
                                }
                           
                                {/* <Pagination /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopSection;