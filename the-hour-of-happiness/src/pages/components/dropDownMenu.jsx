import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './dropDownMenu.css';
import axios from 'axios'

export const DropDownMenu = ({user, handleLogout}) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();



    // handler for toggling dropdown
    const toggleMenu = () =>{
        // sets isOpen to the opposite of its current value
        setIsOpen(!isOpen);
    }

    // useEffect(() => {
    //     checkAuthentication();
    // }, []);

    // const checkAuthentication = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:4000/check-authentication', { withCredentials: true });
    //         console.log(res.data)
    //         // setIsAuthenticated(res.data.authenticated);
    //         // console.log(isAuthenticated);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const handleLogoutButton = async () => {
        try {
            const res = await axios.post('http://localhost:4000/logout')
            if (res.status === 200) {
                navigate('/home');
                toggleMenu();
                handleLogout() ;
                // console.log(isAuthenticated);
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleHomeClick = () => {
        toggleMenu();
        navigate('/home')
    }

    const handleProfileClick = () => {
        toggleMenu();
        navigate('/profile');
    }

    const handleSignIn = () => {
        navigate('/login');
        // console.log(isAuthenticated);
    }

    const handleAccountClick = () => {
        toggleMenu();
        navigate('/my-account');
    }

    return (
        <div className='dropdown-container'>
            <button className='dropdown-btn' onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <ul className='dropdown-menu'>
                    {!user && ( 
                        <div onClick={handleSignIn}>
                            <li 
                            // onClick={handleSignIn}
                            >Sign In</li>
                        </div>
                    )}
                    <div onClick={handleHomeClick}><li>Home</li></div>
                    {user && (
                    <div onClick={handleProfileClick}><li>Profile</li></div>
                    )}
                    <div onClick={toggleMenu}><li>Map</li></div>
                    {user && (
                    <div onClick={handleAccountClick}><li>Account</li></div>
                    )}
                    {user && (
                        <div onClick={handleLogoutButton}> 
                            <li 
                            // onClick={handleLogout}
                            >Log out</li>
                        </div>
                    )}
                </ul>
            )}
        </div>
    )
}