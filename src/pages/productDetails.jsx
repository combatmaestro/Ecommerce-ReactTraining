import React from "react";
import { Container, Grid , Box , Typography, Button ,TextField } from "@mui/material";
import Header from "../components/Header";

const product = {
  id: 1,
  name: "Bluetooth Speaker",
  price: 1499,
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnBW5mbccxm3tPHOynhHU96f2P2iAz0qwaqGK4rDt4536KW2ipRyc3YcjE8Rm8wk8rtvbqdO2Hq5yuTU12LlrqfzMQC325kYnhlbzLOn7hF15KH1dDW8ovu2zDkiX76deQ00xZ49bO1w&usqp=CAc",
  description:
    "Enjoy your music anywhere with this compact, powerful Bluetooth speaker. Long-lasting battery, clear sound, and sleek design.",
};
export default function ProductDetails() {
    const [quantity, setQuantity] = React.useState(1);

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value > 0)
            setQuantity(value);
         
    }

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

                <Box sx={{display: "flex",alignItems: "center", mb: 2}}>
                    <TextField 
                    type="number"
                    size="small"
                    value={quantity}
                    onChange={handleQuantityChange}
                    inputProps={{min: 1}}
                    sx={{width: 100, mr: 2}} />
                    <Button variant="contained" size="large">
                    Add to Cart
                    </Button>
                </Box>
            </Grid>
            </Grid>
        </Container>
        </>
    )
}