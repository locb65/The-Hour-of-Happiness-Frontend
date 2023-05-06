import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './verifyAge.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// added age verification since this is based on alcholic beverages
export const AgeVerificationForm = () => {
    // state for DOB verification
    const [dob, setDob] = useState(new Date());
    const navigate = useNavigate();

    const handleVerification = () => {
        // calculates the age diff. 
        // Date.now() gives current date
        // dob.getTime() gives dob selected from the calendar
        const ageDifference = Date.now() - dob.getTime();
        // sets age from above to new date giving age of user
        const ageDate = new Date(ageDifference);
        // calculates the age of the user based on years 
        // uses 1900 as a base point as I doubt anyone is alive still that is born before 1900
        const age = Math.abs(ageDate.getUTCFullYear() -1900);
        
        if (age <21) {
            navigate('/access-denied')
        } else {
            navigate('/login-choice')
        }
    }

    return (
        <div className="age-verification-container">
            <h2>Are You Above 21 Years Old?</h2>
            <p>Please select your Date of Birth to Conitnue</p>
            <div className="calendar-wrapper">
                <Calendar 
                className="custom-calendar" 
                value = {dob}
                onChange = {setDob}
                maxDate={new Date()}/>
            </div>
            <button 
            className="submit-dob" 
            type="submit"
            onClick={handleVerification}>
                Verify
            </button>
        </div>
    )
}