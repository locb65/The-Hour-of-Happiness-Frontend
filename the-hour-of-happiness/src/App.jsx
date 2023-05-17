import React, { useState } from 'react';
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
  const navigate = useNavigate();
  const handleLogin = () => {
    // Perform login logic
    setUser(true); // Set the user state to true after successful login
    navigate('/home');
  };



  return (
    <div>
    <Header user = {user}/>
    <Routes>
      <Route path='/' element={<WelcomePage/>} />
      <Route path="/home" element={<HomeView />} />
      <Route path="/login" element={user ?  <Navigate to='/home'/> : <LoginPage user = {user} handleLogin = {handleLogin}/>} />
      <Route path="/login-choice" element={<LoginChoice />} />
      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to='/home'/>} />
      <Route path="/create-account" element={<CreateAccountPage/>} />
    </Routes>
    </div>
  )
}

