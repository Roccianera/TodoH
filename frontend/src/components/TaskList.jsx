import { Stack } from '@mui/material'
import React from 'react'
import Task from './Task'
import tasklist from '../assets/tasklist.json'

function TaskList() {
  return (

    
    <Stack direction='column' sx={{ width: '100%' }}>

        {tasklist.map((task) => (
            <Task key={task.id} task={task} />
        
            ))}
    </Stack>


    
    
  )
}

export default TaskList