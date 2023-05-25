import React, { useState, useEffect } from 'react';
import { HomeView } from './pages/home';
import { LoginChoice } from './pages/loginChoicePage';
import { LoginPage } from './pages/loginPage';
import { WelcomePage } from './pages/welcomePage';
import { AccessDenied } from './pages/accessDenied';
import { Route, Routes} from 'react-router-dom'
import { ProfilePage } from './pages/profilePage';
import { CreateAccountPage } from './pages/createAccountPage';
import axios from 'axios';
import { Header } from './pages/components/header';
import { useNavigate, Navigate } from 'react-router-dom';
import { AccountPage } from './pages/accountPage';
import { Footer } from './pages/components/footer';
import './App.css'

axios.defaults.baseURL = 'https://clink-city-mern-backend.herokuapp.com';

export const App = () => {
  const [user, setUser] = useState(false);
  const [sessionUser, setSessionUser] = useState(null)
  const [searchResults, setSearchResults] = useState([]);
  
  const navigate = useNavigate();
  
  const handleLogin = (sessionUser) => {
    setUser(true);
    setSessionUser(sessionUser);
    console.log('Logged in:', sessionUser);
  };
  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleDeleteUser = () => {
    setUser(false)
    alert(`${sessionUser.name} account deleted successfully!`)
  }
  const handleLogout = () => {
    // Perform logout logic
    setUser(false); // Set the user state to false after logout
    alert('Logout Successful');
  }; 
  // checks to see if user is authenticated to persist user through rerender. Not working yet
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // request to endpoint
        const res = await axios.get('https://clink-city-mern-backend.herokuapp.com/check-authentication', { withCredentials: true });
        console.log(res.data)
        const isAuthenticated = res.data.authenticated;
        // condition to set user state if user is authenticated
        if (isAuthenticated) {
          setSessionUser(res.data.user);
          setUser(true);
        }
        console.log('Is authenticated:', isAuthenticated);
      } catch (error) {
        console.log(error);
      }
    };
  
    checkAuthentication();
  }, []
  //   console.log(user);
  // }, [user]
  );

  const isHeaderVisible = ['/home', '/profile', '/my-account'].includes(window.location.pathname);
  const isFooterVisible = ['/home', '/profile', '/my-account'].includes(window.location.pathname)

  return (
    <div className='app-container'>
    {isHeaderVisible && <Header user={user} handleSearch={handleSearch} handleLogout = {handleLogout} navigate = {navigate}/>}
    
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path="/home" element={<HomeView sessionUser ={sessionUser} searchResults={searchResults}/>} />
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/home" />
          ) : (
            <LoginPage user={user} handleLogin={handleLogin} />
          )
        }
      />
      <Route path="/login-choice" element={<LoginChoice />} />
      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="/profile" element={user ? <ProfilePage  navigate = {navigate} sessionUser ={sessionUser}/> : <Navigate to='/home'/>} />
      <Route path="/create-account" element={<CreateAccountPage/>} />
      <Route path="/my-account" element={<AccountPage sessionUser={sessionUser} navigate = {navigate} user={user} handleDeleteUser= {handleDeleteUser}/>} />
    </Routes>
    {isFooterVisible && <Footer />}
    </div>
  )
}

