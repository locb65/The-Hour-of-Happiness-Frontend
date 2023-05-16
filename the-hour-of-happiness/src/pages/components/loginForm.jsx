import React, { useState }from "react";
import './loginForm.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


export const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    return (
        <div className="login-form-container">
            <form className="login-form">
                <h1>Login or Sign Up</h1>
                <div className = "login-email-input-container">
                    <label htmlFor= "name">Email</label>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="login-password-input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <button className="login-btns" type="submit">Log In</button>
                <Link to='/create-account'><button className="login-btns" type="submit">Sign Up</button></Link>
            </form>
        </div>
    )
}