import React, { useState } from 'react';
import './createAccountForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateAccount = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // useNavigate = allows for navigation to routes from form submissions
    const navigate = useNavigate();

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Ppassword does not match!')
            return;
        }

        try {
            const res = await axios.post(
                'https://clink-city-mern-backend.herokuapp.com/accounts/restaurant-owners/new-owner', 
                {name, email, password});
            console.log('Account Created: ', res.data)
            // using navigate to reroute after an account is created successfully
            navigate('/login')
        } catch (err) {
            console.log({error: 'Error creating account', err})
    }
};
    return (
        <div className = 'create-account-form-container'>
            <form className='create-account-form' onSubmit={handleSubmit}>
            <h1>
                Fill in the Fields
            </h1>
                <div className='name-input-container'>
                    <label htmlFor = 'name'>Name</label>
                    <input type='text' id='name' name = 'name' placeholder = 'Name' value = {name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='email-input-container'>
                    <label htmlFor = 'email'>Email</label>
                    <input type='email' id='email' name = 'email' placeholder='Email' value = {email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='password-input-container'>
                    <label htmlFor = 'password'>Password</label>
                    <input type='password' id='password' name='password' placeholder='Password' value = {password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='verify-password-container'>
                    <label htmlFor = 'verify-password'>Verify Password</label>
                    <input type='password' id='verify-password' name='verify-password' placeholder='Confirm Password' value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button className = 'create-account-btn' type="submit"> Create Account </button>
            </form>
        </div>
    )
}