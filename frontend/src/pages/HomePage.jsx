import { Button } from '@mui/material'
import {useNavigate } from 'react-router-dom'
import { useState } from 'react'

import useSignOut from 'react-auth-kit/hooks/useSignOut';

function HomePage() {
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(false);
  const signout = useSignOut();

  const handleSignOut = () => {
    signout();
    navigate("/login");
  }

  
  return (
    <>
      <div>HomePage</div>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/register")}>Register</Button>
      <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
      <Button onClick={()=>handleSignOut()}>LOGOUT</Button>

    

   
   
    
    </>






  )
}
export default HomePage