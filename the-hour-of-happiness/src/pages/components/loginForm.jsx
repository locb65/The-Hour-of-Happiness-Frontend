import React from "react";
import './loginForm.css'

export const Login = () => {
    return (
        <div className="login-form-container">
            <form className="login-form">
                <label className="login-fields">
                    Email:
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <br />
                <label className="login-fields">
                    Password:
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <br />
                <button className="login-btns" type="submit">Log In</button>
                <button className="login-btns" type="submit">Sign Up</button>
            </form>
        </div>
    )
}