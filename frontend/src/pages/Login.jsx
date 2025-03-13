import LoginForm from "../components/LoginForm";
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';




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
    return (

        
    
        
        <StyledBox>
            
            <Typography variant="h3" color="black">Login</Typography>

                <LoginForm ></LoginForm>
        </StyledBox>

    );
    
}




export default Login;