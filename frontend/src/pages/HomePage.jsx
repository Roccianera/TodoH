import { Button } from '@mui/material'
import React, { use, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios';
function HomePage() {
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(false);

useEffect(() => {

}, []);

const fetchtaskexample =  (e) => {

  console.log("Fetch ...  ")
  
 const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2pvIiwiaWF0IjoxNzQxNzMzNDU2LCJleHAiOjE3NDE3MzcwNTZ9.0XyYDBPLR2o5Pv-s8SD2i8oiSoxGDHCYDmGPGGQA27Q";

  axios
    .get("http://localhost:8080/api/v1/tasks/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.error("Errore:", error));
    
   
}




 
  
  return (
    <>
      <div>HomePage</div>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/register")}>Register</Button>
      <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
      <Button onClick={fetchtaskexample}>fetch</Button>

    

   
   
    
    </>






  )
}
export default HomePage