import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './dropDownMenu.css';
import axios from 'axios'

export const DropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    // handler for toggling dropdown
    const toggleMenu = () =>{
        // sets isOpen to the opposite of its current value
        setIsOpen(!isOpen);
    }

    const handleLogout = async () => {
        try {
            const res = await axios.post('http://localhost:4000/logout')
            if (res.status === 200) {
                navigate('/home');
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='dropdown-container'>
            <button className='dropdown-btn' onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <ul className='dropdown-menu'>
                    <Link to ='/login'><div><li>Sign In</li></div></Link>
                    <Link to='/profile'><div><li>Profile</li></div></Link>
                    <Link><div><li>Map</li></div></Link>
                    <Link><div><li>Account</li></div></Link>
                    <div onClick={handleLogout}><li>Log out</li></div>
                </ul>
            )}
        </div>
    )
}