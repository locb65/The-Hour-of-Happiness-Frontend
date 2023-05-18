import React from 'react';
import { Login } from './components/loginForm';
import './loginPage.css'

export const LoginPage = ({ user, handleLogin}) => {
    return (
        <div className='login-container'>
            <Login user={user} handleLogin={handleLogin}/>
        </div>
    )
}