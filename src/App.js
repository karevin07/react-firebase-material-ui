import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LoginSuccess from './components/LoginSuccess';
import Navbar from './components/Navbar';
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess';
import ResetPassword from './components/ResetPassword';
import ResetPasswordSuccess from './components/ResetPasswordSuccess';
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
          <Route path="/reset-password-success" element={<ResetPasswordSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
