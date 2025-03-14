import { Box, Button, Typography } from '@mui/material'
import {useNavigate } from 'react-router-dom'
import { useState } from 'react'


import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { getUser } from '../service/authService';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useEffect } from 'react';
import { getTasks } from '../service/authService';

function HomePage() {
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(false);
  const signout = useSignOut();
  const isAuth = useIsAuthenticated();



  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      console.log(response);
    } catch (error) {
      setError("Error fetching data");
    }
  }


  const handleSignOut = () => {
    signout();
    navigate("/login");
  }




  
  return (
    <>
      <Typography variant="h4">Home Page</Typography>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <Button  onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/register")}>Register</Button>
      <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
      <Button onClick={() =>fetchTasks()}>Tasks</Button>
      <Button onClick={()=>handleSignOut()}>LOGOUT</Button>
      </Box>
    

   
   
    
    </>






  )
}
export default HomePage