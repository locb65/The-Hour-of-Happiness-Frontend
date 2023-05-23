import React from "react";

export const AccountComponent = () =>{
    return(
        <div className="account-component-container">
            <h1>Account Page</h1>
            <div className="account-update-section">
                <h2>Email</h2>
                <input className="email-input" type="text" placeholder="Email"/>
                <button className="edit-email-btn">Edit</button>
                <button className="update-email-btn">Button</button>
            </div>
            <div className="account-update-section">
                <h2>Password</h2>
                <input className="password-input" type="password" placeholder="Enter your password" />
                <input className="password-input" type="password" placeholder="Confirm your password" />
                <button className="edit-password-btn"></button>
                <button className="update-password-btn"></button>
            </div>
            <div className="account-update-section">
                <h2>Delete Account</h2>
                <button className ="delete-account-btn">Delete Account</button>
            </div>
        </div>
    )
}