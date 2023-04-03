import React from "react";
import Google from "./Register folder/GoogleSignin";
import Register from "./Register folder/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Logout from "./Register folder/Logout";
import {Link} from "react-router-dom"
import Profile from "./Profile folder/Profile";
import ProfileContent from "./Profile folder/ProfileContent";
import Login from "./Register folder/Login";


function RegisterPage() {
    
    const [user] = useAuthState(auth)
    console.log(user)
    

    return(
        <div className="navbar__Style">
            <Register/>
            <Logout/>
           </div>
    )
}


export default RegisterPage