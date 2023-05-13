import React from 'react';
import { HomeView } from './pages/home';
import { LoginChoice } from './pages/loginChoicePage';
import { LoginPage } from './pages/loginPage';
import { WelcomePage } from './pages/welcomePage';
import { AccessDenied } from './pages/accessDenied';
import { Route, Routes} from 'react-router-dom'
import { ProfilePage } from './pages/profilePage';
import { CreateAccountPage } from './pages/createAccountPage';


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage/>} />
      <Route path="/home" element={<HomeView />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login-choice" element={<LoginChoice />} />
      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create-account" element={<CreateAccountPage/>} />
    </Routes>
  )
}

