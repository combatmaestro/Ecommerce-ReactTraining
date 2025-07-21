import { Typography , Box , Button , Container} from "@mui/material";
import React from "react";      

export default function Hero() {
  return (
   <Box 
   sx={{
    height: "70vh",
    backgroundImage: "url(https://i.pinimg.com/736x/64/e0/b8/64e0b8556d28d6e666dfc01a16c0168b.jpg)",
    backgroundsize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
   }}>
     
     <Container>
        <Typography variant='h3' color="white" gutterBottom>
            Discover the Latest Trends
        </Typography>
        <Typography variant='h5' color="white" mb={3}>
            Shop the best products at unbeatable prices
        </Typography>
        <Button variant="contained" color="primary" size="large">
            Shop Now
        </Button>
     </Container>
   </Box>
  );
}