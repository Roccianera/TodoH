import LoginForm from "../components/LoginForm";
import { Box, Typography } from '@mui/material';
import { use, useEffect } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from 'react-auth-kit/utils/utils';
import NavBar from "../Layout/NavBar";




const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    background: "lightgrey",
    borderRadius: "5px",
    border: "2px solid #323232",
    boxShadow: "4px 4px #323232",
    width: "100%",
    height: "100vh",
  });



function Login() {



    const navigate =useNavigate();





    return (

        
        <>
        <NavBar></NavBar>
        
        <StyledBox>
            
            <Typography variant="h3" color="black">Login</Typography>

                <LoginForm ></LoginForm>
        </StyledBox>
        
        </>
        

    );
    
}




export default Login;