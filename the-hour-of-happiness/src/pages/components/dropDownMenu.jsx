import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './dropDownMenu.css';
import axios from 'axios'

export const DropDownMenu = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();



    // handler for toggling dropdown
    const toggleMenu = () =>{
        // sets isOpen to the opposite of its current value
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        checkAuthentication();
    }, []);

    const checkAuthentication = async () => {
        try {
            const res = await axios.get('http://localhost:4000/check-authentication', { withCredentials: true });
            console.log(res.data)
            setIsAuthenticated(res.data.authenticated);
            console.log(isAuthenticated);
        } catch (err) {
            console.log(err);
        }
    };

    const handleLogout = async () => {
        try {
            const res = await axios.post('http://localhost:4000/logout')
            if (res.status === 200) {
                navigate('/login');
                console.log(isAuthenticated);
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleSignIn = () => {
        navigate('/login');
        console.log(isAuthenticated);
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
                    <Link to='/profile'><div><li>Profile</li></div></Link>
                    <Link><div><li>Map</li></div></Link>
                    <Link><div><li>Account</li></div></Link>
                    {user && (
                        <div onClick={handleLogout}> 
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