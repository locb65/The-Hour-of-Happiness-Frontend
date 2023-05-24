import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './verifyAge.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// added age verification since this is based on alcholic beverages
export const AgeVerificationForm = () => {
    // state for DOB verification
    const [dob, setDob] = useState(new Date());
    const [calendarDate, setCalendarDate] = useState(null)
    const navigate = useNavigate();

    const handleVerification = () => {
        // calculates the age diff. 
        // Date.now() gives current date
        // dob.getTime() gives dob selected from the calendar
        const ageDifference = Date.now() - dob.getTime();
        // sets age from above to new date giving age of user
        const ageDate = new Date(ageDifference);
        // this will divide the age of the user by the number of seconds in a year giving a more accurate age
        const age = Math.floor((new Date() - dob) / 31557600000);
        
        if (age <21) {
            navigate('/access-denied')
        } else {
            navigate('/login-choice')
        }
    }

    const handleCalendarChange = (date) => {
        setCalendarDate(date);
        setDob(date)
    }

    return (
        <div className="age-verification-container">
            <h2>Are You Above 21 Years Old?</h2>
            <p>Please select your Date of Birth to Conitnue</p>
            <div className="calendar-wrapper">
                <Calendar 
                className="custom-calendar" 
                value = {dob}
                onChange = {handleCalendarChange}
                maxDate={new Date()}
                />
                
            </div>
            {calendarDate && (
                <p>Date of Birth: {calendarDate.toDateString()}</p>
            )}
            <button 
            className="submit-dob" 
            type="submit"
            onClick={handleVerification}>
                Verify
            </button>
        </div>
    )
}