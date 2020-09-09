import React from 'react'
import '../styles/Signup.css';
import {Link} from "react-router-dom";

function Signup() {
    return (
        <div>
        <div className="signup">
                <h1 className="signup__title">Hackaton</h1>
            <div className="signup__container">
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password" ></input>
                <input type="emai" placeholder="Username"></input>
                <input type="password" placeholder="Confirm password" ></input>
                <input type="image" placeholder="Add picture"></input>
                <button type="submit" value="Register"></button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Signup
