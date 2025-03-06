import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import NavBar from './components/NavBar'
import LeftBar from './components/LeftBar'
import Content from './components/Content'


function App() {

  return (
    <>
    
    <Box  sx={ { backgroundColor:"lightgray", minHeight: '100vh'}}>
      
      <NavBar/>
      <Stack direction='row' spacing={2} justifyContent={"space-between"}>
        <LeftBar/>
        <Content/>

      </Stack>

    </Box>

    </>
  )
}

export default App
