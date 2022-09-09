import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {login} from "./../Redux/Actions/userAction"
import Message from "../components/LoadingError/Error"
import Loading from "../components/LoadingError/Loading"
const Login = ({location,history}) =>{
    window.scrollTo(0,0);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1]:"/"
    
    const  userLogin = useSelector((state)=> state.userLogin);
    const {error,loading, userInfo} = userLogin;

    useEffect(()=>{
        if(userInfo){
            history.push(redirect);
        }
    }, [userInfo,history,redirect]);

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(login(email,password))
    }
    return(
        <>
        <Header/>
        <div className="container">
            {error && <Message>{error}</Message>}
            {loading && <Loading/>}
            <form onSubmit={submitHandler}>
                <input type="email" placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" placeholder="Passport"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <p>
                    <Link to={redirect ?`/register?redirect=${redirect}` : "/redister"}>
                    Create Account
                    </Link>
                </p>
            </form>
        </div>
        </>
    )
}

export default Login