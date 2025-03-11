import { Stack } from '@mui/material'
import React from 'react'
import Task from './Task'
import tasklist from '../assets/tasklist.json'

function TaskList({setTask}) {
  return (

    
    <Stack direction="column" sx={{ width: {xs:"100%"}}} padding={ 2} spacing={2}>

        {tasklist.map((task) => (
            <Task key={task.id} task={task}  setTask={setTask} />
        
            ))}
    </Stack>


    
    
  )
}

export default TaskList