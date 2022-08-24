import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Register= () =>{
    window.scrollTo(0,0)
    return(
        <>
        <Header/>
        <div className="container ">
            <form className="">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button type="submit">Register</button>
                <p>
                    <Link to={"/login"}>
                    I Have Account <strong>Login</strong>
                    </Link>
                </p>
            </form>

        </div>
        </>
    )
}

export default Register;