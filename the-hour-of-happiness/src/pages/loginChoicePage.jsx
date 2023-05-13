import React from "react";
import './loginChoicePage.css'
import { Link } from 'react-router-dom'

export const LoginChoice = () => {
    return (
        <div className="login-choice-container">
            <Link to='/home'className="login-choice-left">
                <div >
                    <h2 className="consumer-choice"> Are you a Happy Drinker?</h2>
                </div>
            </Link>
            <Link to='/login' className="login-choice-right">
                <div >
                    <h2 className="owner-choice"> Are you a Happy Provider?</h2>
                </div>
            </Link>
        </div>
    )
}