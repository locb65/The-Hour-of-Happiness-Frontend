import React from 'react';
import { HomeView } from './pages/home';
import { LoginChoice } from './pages/loginChoicePage';
import { LoginPage } from './pages/loginPage';
import { WelcomePage } from './pages/welcomePage';

export const App = () => {
  return (
    <div className='App'>
      {/* <HomeView/> */}
      {/* <LoginChoice/> */}
      {/* <LoginPage/> */}
      <WelcomePage/>

    </div>
  )
}

