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

axios.defaults.baseURL = 'http://localhost:4000';

export const App = () => {
  const [user, setUser] = useState(false);
  const [sessionUser, setSessionUser] = useState(null)
  const [searchResults, setSearchResults] = useState([]);
  
  const navigate = useNavigate();
  
  const handleLogin = (sessionUser) => {
    setUser(true);
    setSessionUser(sessionUser);
    console.log(sessionUser);
  };
  const handleSearch = (results) => {
    setSearchResults(results);
  };
  const handleLogout = () => {
    // Perform logout logic
    setUser(false); // Set the user state to false after logout
    alert('Logout Successful');
  }; 

  useEffect(() => {
    console.log(user);
  }, [user]);

  const isHeaderVisible = ['/home', '/profile'].includes(window.location.pathname);

  return (
    <div>
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
    </Routes>
    </div>
  )
}

