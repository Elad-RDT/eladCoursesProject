import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './components/homePage';
import AppLogin from './components/appLogin';
import AppSignUp from './components/appSignUp';
import NavBar from './components/navBar';
import { Routes,Route } from 'react-router-dom';
import MyCourses from './components/myCourses';
import AppCourses from './components/appCourses';
import AppChangePassword from './components/appChangePassword';

function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
<Route exact path="/changepassword" element={<AppChangePassword/>}/>
<Route exact path="/myCourses" element={<AppCourses/>}/>
<Route exact path="/signUp" element={<AppSignUp/>}/>
 <Route exact path='/login' element={<AppLogin/>}/>
 <Route exact path='/' element={ <HomePage/> }/>
 </Routes>

{/* <MyCourses/> */}
   
    </div>

  );
}

export default App;

