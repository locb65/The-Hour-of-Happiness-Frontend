import React from "react";

export const Login = () => {
    return (
        <div className="login-container">
            <h2>Login or Sign Up</h2>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <br />
                <button type="submit">Log In</button>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}