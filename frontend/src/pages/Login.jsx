import LoginForm from "../components/LoginForm";
import { Box } from '@mui/material';
import styled from 'styled-components';




const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",

    background: "lightgrey",
    borderRadius: "5px",
    border: "2px solid #323232",
    boxShadow: "4px 4px #323232",
    width: "100%",
    height: "100%"
  });



function Login() {
    return (
        
        <StyledBox>

                <LoginForm ></LoginForm>
        </StyledBox>

    );
    
}




export default Login;