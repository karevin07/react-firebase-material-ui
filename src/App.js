import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import LoginSuccess from './components/LoginSuccess';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess';
import ResetPassword from './components/ResetPasseword';
import ResetPassewordSuccess from './components/ResetPassewordSuccess';
import Index from './components/Index';
import { getLoginStatusFromFirebase } from './components/SessionService'; 


function App() {

   // Use status to indicate whether a user is logged in or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    getLoginStatusFromFirebase().then((status) => {
      setIsAuthenticated(status);
    })
  }, []);


  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="App">
        <h1>My Application</h1>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Index isAuthenticated={isAuthenticated} />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
          <Route path="/login-success" element={<LoginSuccess />} /> 
          <Route path="/register-success" element={<RegisterSuccess />} /> 
          <Route path="/reset-password-success" element={<ResetPassewordSuccess />} /> 
          <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
