import { Button } from '@mui/material'
import React, { use, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'


import axios from 'axios';
import { logout } from '../service/authService';
function HomePage() {
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(false);

  
  return (
    <>
      <div>HomePage</div>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/register")}>Register</Button>
      <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
      <Button onClick={()=>logout()}>LOGOUT</Button>

    

   
   
    
    </>






  )
}
export default HomePage