import { Box, Stack } from '@mui/material'

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import PrivateRoute from './pages/PrivateRoute'



function App() {

  return (
    <>
    
    <Box  sx={ { backgroundColor:"pink", minHeight: '100vh'}}>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

    </Box>

    </>
  )
}

export default App
