import { useState } from 'react'
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import App from './App.js'
import { ThemeProvider } from 'react-bootstrap'
import './main.css'
import Login from './Login.js'
import Signup from './Signup.js'
import Map from './pages/map.js'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/map' element={<Map />} />
      </Routes>
      </BrowserRouter>
  );
}

export default Main;