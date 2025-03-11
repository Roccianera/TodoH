import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import NavBar from './components/NavBar'
import LeftBar from './components/LeftBar'
import Content from './components/Content'
import RightBar from './components/RightBar'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import NotFound from './pages/NotFound'
import Footer from './Layout/Footer'


function App() {

  return (
    <>
    
    <Box  sx={ { backgroundColor:"pink", minHeight: '100vh'}}>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

    </Box>

    </>
  )
}

export default App
