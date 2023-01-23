import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthPasswordsProvider from './components/login';
import UserProvider from './components/signup';
import HomePageFunc from './components/homePageFunc';
import { BrowserRouter } from 'react-router-dom';
import MyCourses from './components/myCourses';
import ChangePassword from './components/changePassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <AuthPasswordsProvider>
  <HomePageFunc>
    <MyCourses>
      <ChangePassword>
  <BrowserRouter>
    <App />
  </BrowserRouter>
      </ChangePassword>
    </MyCourses>
  </HomePageFunc>
    </AuthPasswordsProvider>
    </UserProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
