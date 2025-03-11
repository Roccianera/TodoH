import React from 'react';
import { Box, Container, Grid2 , Link, Stack, Typography } from '@mui/material';


const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.dark',
                color: 'white',
                p: 2,
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={3} alignItems="center">
                    <Grid2 item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold">
                            TodoH
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400' }}>
                            Organize your tasks efficiently
                        </Typography>
                    </Grid2>
                    
                    <Grid2 item xs={12} md={4}>
                        <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'center' }}>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'info.main' } }}>
                                Home
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'info.main' } }}>
                                Features
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'info.main' } }}>
                                About
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'info.main' } }}>
                                Contact
                            </Link>
                        </Stack>
                    </Grid2>
                    
                    <Grid2 item xs={12} md={4}>
                        <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400', textAlign: { xs: 'center', md: 'right' } }}>
                            &copy; {year} TodoH. All rights reserved.
                        </Typography>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    
    );
    };

export default Footer;