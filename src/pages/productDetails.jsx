import React from "react";
import { Container, Grid , Box , Typography  } from "@mui/material";
import Header from "../components/Header";

const product = {
  id: 1,
  name: "Bluetooth Speaker",
  price: 1499,
  image: "https://source.unsplash.com/featured/?bluetooth,speaker",
  description:
    "Enjoy your music anywhere with this compact, powerful Bluetooth speaker. Long-lasting battery, clear sound, and sleek design.",
};
export default function ProductDetails() {
    return(
        <>
        <Header />
        <Container sx={{py:6}}>
           <Grid container spacing={6}>
             <Grid item xs={12} md={6}>
               <Box 
                component="img"
                src={product.image}
                alt={product.name}
                sx={{width: "100%", borderRadius: 2}}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {product.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                ₹{product.price}
                </Typography>
                <Typography variant="body1" paragraph>
                {product.description}
                </Typography>
            </Grid>
            </Grid>
        </Container>
        </>
    )
}