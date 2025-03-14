


import React, { useEffect } from 'react'
import Content from '../components/Content'
import NavBar from '../Layout/NavBar'
import { useNavigate } from 'react-router-dom'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

function Dashboard() {



  return (
    <>
    <NavBar/>
    <Content/>

    </>
  )
}

export default Dashboard