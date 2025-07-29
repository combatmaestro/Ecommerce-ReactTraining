import React from "react";
import { Container, Grid , Box ,Paper, Typography, Button ,TextField } from "@mui/material";
import Header from "../components/Header";

const product = {
  id: 1,
  name: "Bluetooth Speaker",
  price: 1499,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
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

    return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                overflow: "hidden",
                borderRadius: 3,
                aspectRatio: "1 / 1",
                height:400,
                width:400,
                objectFit:'cover'
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Paper>
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ₹{product.price.toLocaleString()}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {product.description}
            </Typography>

            {/* Quantity & Button */}
            <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
              <TextField
                type="number"
                size="small"
                value={quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                label="Quantity"
                sx={{ width: 120 }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ px: 4, borderRadius: 2 }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}