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



function App() {

  return (
    <>
    
    <Box  sx={ { backgroundColor:"pink", minHeight: '100vh'}}>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>

    </Box>

    </>
  )
}

export default App
