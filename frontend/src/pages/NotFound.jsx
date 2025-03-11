import { Typography } from "@mui/material";
import { Box } from "@mui/system";




function NotFound() {

    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
           <Typography variant="h1">404 Not Found</Typography>

        </Box>
    )
}

export default NotFound;