import './App.css';

import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Index from './components/Index';
import Login from './components/Login';
import LoginSuccess from './components/LoginSuccess';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess';
import ResetPassewordSuccess from './components/ResetPassewordSuccess';
import ResetPassword from './components/ResetPasseword';
import firebaseApp from './firebase/firebase';

function App() {

   // Use status to indicate whether a user is logged in or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      setIsAuthenticated(Boolean(user));
    });

    return () => unsubscribe();
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
          <Route path="/login" element={<Login />}/>
          <Route path="/login-success" element={<LoginSuccess />} /> 
          <Route path="/register-success" element={<RegisterSuccess />} /> 
          <Route path="/reset-password-success" element={<ResetPassewordSuccess />} /> 
          <Route path="/logout" element={<Logout />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
