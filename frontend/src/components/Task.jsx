
import { Box, ListItem, Radio } from '@mui/material'
import React from 'react'

import styled from 'styled-components'

const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: "20px",
    padding: "0px",
    background: "lightgrey",
    borderRadius: "5px",
    border: "2px solid #323232",
    boxShadow: "4px 4px #323232",
    width: "100%",
    height: "100%",
  });
  

function Task({task, setTask, ...props}) {

	const prova : ="Prova";
  return (
   	
        <StyledBox>
            <Radio></Radio>
            <ListItem onClick={() => setTask(task)}>
            {task.title}
            </ListItem>
        </StyledBox>

    
  )
}

export default Task
