import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import LoginSuccess from './components/LoginSuccess';
import Navbar from './components/Navbar';
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess';
import ResetPassword from './components/ResetPasseword';
import ResetPassewordSuccess from './components/ResetPassewordSuccess';
import Index from './components/Index';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <h1>Welcome</h1>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/login-success" element={<LoginSuccess />} /> 
          <Route path="/register-success" element={<RegisterSuccess />} /> 
          <Route path="/reset-password-success" element={<ResetPassewordSuccess />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
