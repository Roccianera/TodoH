import { AppBar, Avatar, useTheme } from '@mui/material'
import React from 'react'
import { Container, Toolbar, Typography } from '@mui/material'
import styled from 'styled-components'
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonHamza from './ButtonHamza';
import Box from '@mui/material/Box';


const StyledButton = styled(Button)(({ theme }) => ({

  backgroundColor: "white",
  borderRadius: "5px",
  color: "black",

  border: "2px solid #323232",
  boxShadow: "4px 4px #323232",

}));



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "violet",
  borderRadius: "5px",
  border: "2px solid #323232",
  boxShadow: "4px 4px #323232",
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function NavBar() {
  const theme = useTheme();
  return (
    <AppBar position='sticky'>
      <StyledToolbar theme={theme}>
        <Typography variant="h6" color="inherit" noWrap>
          TODOH
        </Typography>
        <Search theme={theme}>
          <SearchIconWrapper theme={theme}>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            theme={theme}
          />

          
        </Search>
       <Box flex={1} display="flex" justifyContent="flex-end" gap={2}>
       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
       </Box>

       



      




      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar