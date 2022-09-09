import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import "./Header.scss"
import{AiOutlineInstagram,AiOutlineTwitter,AiOutlineFacebook,} from "react-icons/ai"
import { logout } from "../Redux/Actions/userAction";
const Header = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)
    const {cartItems} =cart;
    const userLogin = useSelector((state)=> state.userLogin);
    const {userInfo} = userLogin;
    
    const logoutHandler = ()=>{
       dispatch(logout())
    }
    return (
        <div className=" ">     
        <div className="nav-or">     
                <div className="nav">          
                        <div className="rowa1">+255 768 356 890</div>
                        <div className="rowa2"> info@zpunet.com</div>
                    </div>

                    <div className="redes">
                        <div className="red">
                      
                            <AiOutlineFacebook />
                            <AiOutlineInstagram />
                            <AiOutlineTwitter />
                        </div>


                       </div>
           </div> 
            <div className="header">
                <div className="container">
                            
                                <div >
                                    <Link className="navbar-brand" to="/">
                                        <img src="/images/logo.jpeg" alt="logo" width={"200px"} height={"100px"}/>
                                    </Link>
                                </div>
                            
                                <div className="search-container">
                                    <form >
                                       <div>
                                       <input
                                            type="search"
                                            
                                            placeholder="Search"
                                        />
                                       
                                        <button type="submit" >
                                            search
                                        </button>
                                        </div>
                                    </form>
                                </div>
                                <div >
                                  {
                                    userInfo ?(
                                      <div>
                                        <span>Hi, {userInfo.name}</span>
                                        <Link to="/profile">Profile</Link>
                                        <Link to="#"
                                        onClick={logoutHandler}
                                        >Logout</Link>
                                      </div>
                                    ):
                                    (
                                        <div>
                                        <Link to="/login">Login</Link>
                                        <Link to="/register">Register</Link>
                                      </div>
                                    )
                                  }
                                        
                                        
                                   
                                </div>
                                <div>
                            <Link to="/cart">
                            <span>{cartItems.length}</span>
                            <button type="button" > car</button>
                            </Link>
                                       
                        </div>
                            
                        </div>
                    
                   
                   
                
            </div>
        </div>
    )
}

export default Header;