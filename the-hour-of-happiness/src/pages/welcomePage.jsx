import React from 'react';
import { AgeVerificationForm } from './components/verifyAge';
import './welcomePage.css'

export const WelcomePage = () => {
    return (
        <div className="welcomePage-container">
            <h1 className="welcome-message">
                Welcome to Clink City!
            </h1>
            <AgeVerificationForm/>
        </div>
    )
}