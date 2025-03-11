import { Button } from '@mui/material'
import React, { use, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios';
function HomePage() {
  const navigate = useNavigate();
  const [task, setTask] = useState(null)

useEffect(() => {

  fetchtaskexample();
}, []);

const fetchtaskexample = async () => {

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YTQ1IiwiaWF0IjoxNzQxNjU5NDQyLCJleHAiOjE3NDE2NjMwNDJ9.UXaeKI4lQ4eFTHnAeDNviL6BXdnek3RwfgV3tD55aqs";

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

   
   
    
    </>






  )
}
export default HomePage