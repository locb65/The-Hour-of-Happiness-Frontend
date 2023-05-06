import React from 'react';
import { Login } from './components/loginForm';
import './loginPage.css'

export const LoginPage = () => {
    return (
        <div className='login-container'>
            <h1>Welcome to Clink City!</h1>
            <h2>Please Login or Create an Account</h2>
            <Login/>
        </div>
    )
}