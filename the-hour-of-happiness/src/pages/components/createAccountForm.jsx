import React from 'react';
import './createAccountForm.css';

export const CreateAccount = () => {
    return (
        <div className = 'create-account-form-container'>
            <form className='create-account-form'>
            <h1>
                Fill in the Fields
            </h1>
                <div className='name-input-container'>
                    <label htmlFor = 'name'>Name</label>
                    <input type='text' id='name' name = 'name' placeholder = 'Name' required />
                </div>
                <div className='email-input-container'>
                    <label htmlFor = 'email'>Email</label>
                    <input type='email' id='email' name = 'email' placeholder='Email' required />
                </div>
                <div className='password-input-container'>
                    <label htmlFor = 'password'>Password</label>
                    <input type='password' id='password' name='password' placeholder='Password' required />
                </div>
                <div className='verify-password-container'>
                    <label htmlFor = 'verify-password'>Verify Password</label>
                    <input type='password' id='verify-password' name='verify-password' placeholder='Confirm Password' required />
                </div>
                <button className = 'create-account-btn' type="submit"> Create Account </button>
            </form>
        </div>
    )
}