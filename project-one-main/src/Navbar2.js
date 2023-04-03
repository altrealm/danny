import React from "react";
import Signin from "./Register folder/Register";
import Register from "./Register folder/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Logout from "./Register folder/Logout";
import {Link} from "react-router-dom"
import Profile from "./Profile folder/Profile";
import ProfileContent from "./Profile folder/ProfileContent";
import Login from "./Register folder/Login";

function Navbar() {
    const [user] = useAuthState(auth)
    console.log(user)

    return(
        <div>
            <div className="Navigation__style">
            <h1 className="Heading__style"></h1>
            {user ? <Logout/> : <Signin/>}
            </div>

        <Link to = "/Gasprice">
        <button>
           button to gas price
        </button>
        </Link>
        
        <Login/>
        </div>
    )
}


export default Navbar