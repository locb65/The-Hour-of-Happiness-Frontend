import React from 'react';
import { Link } from 'react-router-dom'
import './accessDenied.css'

export const AccessDenied = () => {
    return (
        <div className="access-denied-container">
            <h2>Access Denied: You must be 21 or older to drink</h2>
            <Link className="link-to-home" to="/">Back to Home</Link>
        </div>
    )
}