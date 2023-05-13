import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './dropDownMenu.css';

export const DropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    // handler for toggling dropdown
    const toggleMenu = () =>{
        // sets isOpen to the opposite of its current value
        setIsOpen(!isOpen);
    }
    return (
        <div className='dropdown-container'>
            <button className='dropdown-btn' onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <ul className='dropdown-menu'>
                    <Link to='/profile'><li>Profile</li></Link>
                    <Link><li>Map</li></Link>
                    <Link><li>Account</li></Link>
                    <Link><li>Log out</li></Link>
                </ul>
            )}
        </div>
    )
}