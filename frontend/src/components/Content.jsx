import { Box, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import TaskList from './TaskList'
import NavBar from './NavBar'



const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  padding: "0px",
  background: "lightgrey",
  borderRadius: "5px",
  border: "2px solid #323232",
  boxShadow: "4px 4px #323232",
  width: "100%",
  height: "100%",
});



function Content() {

  const [task, setTask] = React.useState([])
  return (

<>
      <NavBar/>

      <StyledBox>

        <Stack direction={{xs:"column",md:"row"}} sx={{ width: '100%' }} >
        <LeftBar/>

        <TaskList task={task} setTask={setTask}>
          
        </TaskList>
          <RightBar task={task} setTask={setTask} />
        

        </Stack>
      </StyledBox></>
  )
}

export default Content