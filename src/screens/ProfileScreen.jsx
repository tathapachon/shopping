import React from "react";
import Header from "../components/Header"
import ProfileTabs from "../components/profileComponents/ProfileTabs"
import Orders from "./../components/profileComponents/Orders"

const ProfileScreen = () => {
    window.scrollTo(0,0)
    return(
        <>
        <Header/>
        <div>
            <div>
                <div></div>
                <div>
                    <img src="./images/user.png" alt="userprofileimage" />
                </div>
                <div>
                    <h5>
                        <strong>Admin Doe</strong>
                    </h5>
                    <span>
                        <>Joined Dec 12 2021</>
                    </span>
                </div>            
            </div>
            <div>
                <div>
                    <div>
                    <button>
                        Profile Settings
                    </button>
                    <button>
                        Orders List
                    </button>
                    <span>3</span>
                    </div>  
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfileScreen