
import { Box, Typography } from '@mui/material'
import React from 'react'

function RightBar({task,setTask}) {

  return (
    task && (
    <Box bgcolor={"darkgray"} width={{ xs: '100%', sm: '30%' }}  >

        <Box sx={{ position: 'relative', p: 2, mt: 2, border: '1px solid2 #ddd', borderRadius: 1 }}>
      <Box sx={{ position: 'absolute', top: 5, right: 5 }}>
          <button onClick={() => setTask(null)} style={{ 
        background: 'none', 
        border: 'none', 
        cursor: 'pointer',
        fontSize: '20px'
          }}>
        ×
          </button>
      </Box>
      <Typography variant="h5">{task.title}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Typography variant="caption">Due: {task.dueDate}</Typography>
        </Box>
    </Box>
    )
  )
}

export default RightBar