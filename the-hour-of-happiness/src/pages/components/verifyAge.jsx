import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

// added age verification since this is based on alcholic beverages
export const AgeVerificationForm = () => {
    return (
        <div className="age-verification-container">
            <h2>Are You Above 21 Years Old?</h2>
            <p>Please select your Date of Birth to Conitnue</p>
            <div className="calendar-wrapper">
                <Calendar maxDate={new Date()}/>
            </div>
            <button className="submit-dob" type="submit">Verify</button>
        </div>
    )
}