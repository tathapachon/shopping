import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import{AiOutlineInstagram,AiOutlineTwitter,AiOutlineFacebook,} from "react-icons/ai"
const Header = () => {
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
                                    
                                    <select>
                                        <option value="Hi, Admin Doe">  Hi, Admin Doe</option>
                                        
                                        <option value="profile">Profile</option>
                                        
                                        <option value="Logout"> Logout</option>
                                    </select>
                                </div>
                                <div>
                            <button type="button" > car</button>
                                       
                        </div>
                            
                        </div>
                    
                   
                   
                
            </div>
        </div>
    )
}

export default Header;