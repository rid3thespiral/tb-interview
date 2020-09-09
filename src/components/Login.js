import React from 'react'
import '../styles/Login.css';
import {Link} from "react-router-dom";


function Login() {
    return (

        <div className="login">
                <h1 className="login__title">Hackaton</h1>
            <div className="login__container">
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password" ></input>
                <button type="submit" value="Login"></button>
            </form>
            </div>
            <h2>New to the hackaton? <Link to="/signup">Sign Up</Link></h2>
        </div>


    )
}

export default Login;
