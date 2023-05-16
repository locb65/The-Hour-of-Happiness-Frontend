import React, { useState }from "react";
import './loginForm.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { set } from "mongoose";
import e from "express";


export const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // method for handling authentication request to backend server
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/login', {email, password});
            if (res.status === 200) {
                navigate('/home')
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login or Sign Up</h1>
                <div className = "login-email-input-container">
                    <label htmlFor= "name">Email</label>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="login-password-input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="login-btns" type="submit">Log In</button>
                <Link to='/create-account'><button className="login-btns" type="submit">Sign Up</button></Link>
            </form>
        </div>
    )
}