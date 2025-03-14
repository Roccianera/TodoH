import { Stack } from '@mui/material'
import React, { use } from 'react'
import Task from './Task'
import { getTasks } from '../service/authService'


function TaskList({setTask}) {

  const [tasklist, setTaskList] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading , setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        console.log(response);
        setTaskList(response.data);
      } catch (error) {
        setError("Error fetching data");
      }
    }
    fetchTasks();
  }, [])


  return (

    
    <Stack direction="column" sx={{ width: {xs:"100%"}}} padding={ 2} spacing={2}>

        {tasklist.map((task) => (
            <Task key={task.id} task={task}  setTask={setTask} />
        
            ))}
    </Stack>


    
    
  )
}

export default TaskList