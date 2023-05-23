import React from "react";

export const AccountComponent = ({sessionUser}) =>{
    // replaces password with ****
    const renderPasswordWithAsterisks = (password) => {
        return password.replace(/./g, "*")
    }

    handleInputChange = (e) =>{
        // input Change logic here
    }

    handleEditClick = (e) => {
        // logic for edit btn
    }

    handleUpdateClick = (e) => {
        // logic for update btn here
    }

    const handleDelete = async(e) =>{
        // delete account logic here
    }

    return(
        <div className="account-component-container">
            <h1>Account Page</h1>
            <div className="account-update-section">
                <h2>Email</h2>
                <p>{sessionUser.email}</p>
                <input className="email-input" type="text" placeholder="Email"></input>
                <button className="edit-email-btn">Edit</button>
                <button className="update-email-btn">Button</button>
            </div>
            <div className="account-update-section">
                <h2>Password</h2>
                <p>{renderPasswordWithAsterisks(sessionUser.password)}</p>
                <input className="password-input" type="password" placeholder="Enter your password" />
                <input className="password-input" type="password" placeholder="Confirm your password" />
                <button className="edit-password-btn">Edit Password</button>
                <button className="update-password-btn">Update Password</button>
            </div>
            <div className="account-update-section">
                <h2>Delete Account</h2>
                <button className ="delete-account-btn">Delete Account</button>
            </div>
        </div>
    )
}