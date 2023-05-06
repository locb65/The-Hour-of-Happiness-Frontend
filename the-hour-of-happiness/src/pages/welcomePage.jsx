import React, { useState, useEffect } from 'react';
import { AgeVerificationForm } from './components/verifyAge';
import './welcomePage.css'
import { Link } from 'react-router-dom'

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