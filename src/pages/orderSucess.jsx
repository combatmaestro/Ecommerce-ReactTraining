import React from "react";
import {Container,Typography,Box,Button,Paper} from '@mui/material'
// import CheckCircleOutlineIcon from '@mui/icons-material';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";



export default function OrderSucess(){
   const navigate = useNavigate()

    return(
        <>
         <Header />
           <Container sx={{py:8}} >
            <Paper
             elevation={3}
             sx={{
                textAlign:'Center',
                p:2,
                maxWidth:600,
                mx:'auto',
                borderRadius : 3,
             }}
            >
             {/* <CheckCircleOutlineIcon color='sucess' sx={{fontSize:60}} /> */}
             <Typography variant="h4" fontWeight='bold' mt={2}>
                Thank You
             </Typography>

             <Typography variant='body1' mt={1} mb={4}>
                Your Order has been placed suessfully. You'll recieve a confirmation email shortly.
             </Typography>


             <Box display='flex' justifyContent='center' gap={2} flexWrap='wrap'>
                <Button
                 variant ='contained'
                 onClick={()=>navigate('/')}
                 size="large"
                >
                  Go To Home
                </Button>
                <Button
                 variant="outlined"
                 onClick={()=>navigate('/orders')}
                 size="large"
                >
                    View Orders

                </Button>
             </Box>
            </Paper>
              
           </Container>
         <Footer />
        </>
    )
}