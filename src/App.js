import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home'
import Register from './page/Register';
import './App.css'
import Login from './page/Login';
import ForgotPassword from './page/ForgotPassword';
import ResetPassword from './page/ResetPassword';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot_password" element={<ForgotPassword/>} />
        <Route path="/reset_password" element={<ResetPassword/>} />
      </Routes>
    </>
  )
}

export default App