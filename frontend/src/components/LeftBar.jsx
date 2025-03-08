import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState } from 'react';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';

function LeftBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
          <Button variant="outlined" color='black' onClick={() => setOpen(!open)}>
            <KeyboardDoubleArrowRight />
          </Button>
      )}

      {open && (
        <Box sx={{ flexDirection: "column", backgroundColor: "red", width: '300px', display: { xs: "none", md: "block" }}} p={2} boxShadow={24}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={() => setOpen(!open)}>
              <KeyboardDoubleArrowLeftIcon />
            </Button>
          </Box>
          <Typography variant="h5">LeftBar</Typography>
          <Typography variant="body1">LeftBar</Typography>
          <Typography variant="body1">LeftBar</Typography>
          <Typography variant="body1">LeftBar</Typography>
          <Typography variant="body1">LeftBar</Typography>
          <Typography variant="body1">LeftBar</Typography>
        </Box>
      )}
    </>
  );
}

export default LeftBar;