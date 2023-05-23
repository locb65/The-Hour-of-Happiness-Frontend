import React, {useState} from "react";
import axios from "axios";
import './accountComponent.css';

export const AccountComponent = ({sessionUser, navigate, user, handleDeleteUser}) =>{
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    // replaces password with ****
    const renderPasswordWithAsterisks = (password) => {
        return password.replace(/./g, "*")
    }

    const handleInputChange = (e) => {
        // input Change logic here
        const { name, value } = e.target;
        if (name === "email") {
            setEmailInput(value);
        } else if (name === "password") {
            setPasswordInput(value);
        } else if (name === "confirmPassword") {
            setConfirmPasswordInput(value);
        }
    }

    const handleEditClick = (e) => {
        // logic for edit btn
    }

    const handleUpdateClick = (e) => {
        // logic for update btn here
        console.log("Update clicked");
        if (emailInput !== "") {
            updateEmail();
        }
        if (passwordInput !== "" && confirmPasswordInput !== "") {
            updatePassword();
        }
    }

    const updateEmail = async () => {
        try {
            console.log(sessionUser._id)
            const response = await axios.put(
                `http://localhost:4000/accounts/update-owner/${sessionUser._id}`,
                {
                email: emailInput,
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

      const updatePassword = async () => {
        try {
            const response = await axios.put(
                `http://localhost:4000/accounts/update-owner/${sessionUser._id}`,
                {
                password: passwordInput,
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async(e) =>{
        // delete account logic here
        const delete_Enpoint = `http://localhost:4000/accounts/delete-owner/${sessionUser._id}`
        try {
            const res = await axios.delete(delete_Enpoint);
            console.log(res.data)
            handleDeleteUser();
            navigate('/home')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="account-component-container">
            <h1>Account Page</h1>
            <div className="account-update-section">
                <h2>Email</h2>
                <p>{sessionUser.email}</p>
                <input 
                className="email-input" 
                type="text" 
                name="email" 
                value={emailInput}
                onChange={handleInputChange}
                placeholder="Email"></input>
                {/* <button className="edit-email-btn" onClick={handleEditClick}>Edit Email</button> */}
                <div>
                <button className="update-email-btn" onClick={handleUpdateClick}>Update Email</button>
                </div>
            </div>
            <div className="account-update-section">
                <h2>Current Password</h2>
                <p>{renderPasswordWithAsterisks(sessionUser.password)}</p>
                <div>
                    <h2>New Password</h2>
                    <input 
                    className="password-input" 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password"
                    value={passwordInput}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h2>Confirm New Password</h2>
                    <input 
                    className="password-input" 
                    type="password"
                    name="confirmPassword" 
                    placeholder="Confirm your password" 
                    value={confirmPasswordInput}
                    onChange={handleInputChange}
                    />
                </div>
                {/* <button className="edit-password-btn" onClick={handleEditClick}>Edit Password</button> */}
            </div>
            <div className="account-update-section">
                <button className="update-password-btn" onClick={handleUpdateClick}>Update Password</button>
                <button className ="delete-account-btn" onClick={handleDelete}>Delete Account</button>
            </div>
        </div>
    )
}