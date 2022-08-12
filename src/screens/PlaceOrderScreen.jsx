import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header"

const PlaceOrderScreen =()=>{
    window.scrollTo(0,0)
    const submitHandler = (e)=>{
        e.preventDefault();
    }
    return(
        <>
            <Header/>
            <div>
                <div>
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div>
                    <h5>
                        <strong>Customer</strong>
                    </h5>
                <p>Admin Doe</p>
                <p>admin@example.com</p>
                </div>
                </div>
                <div>
                <div>
                    <i></i>
                </div>
                <div>
                    <h5>
                        <strong>Order info</strong>
                    </h5>
                <p>Shipping: Tanzania</p>
                <p>Pay method: Paypal</p>
                </div>
                </div>

                <div>
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div>
                    <h5>
                        <strong>Deliver to</strong>
                    </h5>
                <p>Address: Arusha Tz, Ngaramtoni Crater, P.O BOX 1234 Arusha Tz</p>
                
                </div>
                </div>
            </div>

            <div>
                <div>
                    <img src="/images/8.png" alt="product" />
                </div>
                <div>
                    <Link to={"/"}>
                        <h6>Girls Nike shoes</h6>
                    </Link>
                </div>
                <div>
                    <h4>QUANTITY</h4>
                    <h6>4</h6>
                </div>
                <div>
                    <h4>SUBTOTAL</h4>
                    <h6>$567</h6>
                </div>
            </div>

            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Products</strong>
                            </td>
                            <td>$345</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Shipping</strong>
                            </td>
                            <td>$123</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Tax</strong>
                            </td>
                            <td>$5</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total</strong>
                            </td>
                            <td>$5678</td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={submitHandler}>
                    <Link to="/order">
                        PLACE ORDER
                    </Link>
                </button>
            </div>

        </>
    )


}

export default PlaceOrderScreen