import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  CardContent,
  Button,
  TextField,
  Card,
  CardMedia,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../components/Header";
import Footer from "../components/Footer";

const initialCart = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    price: 1499,
    quantity: 1,
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 799,
    quantity: 2,
    image: "data:image/jpeg;base64,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",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(quantity) || 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
   return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Your Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography variant="h6" color="text.secondary">
            Your cart is empty.
          </Typography>
        ) : (
          <>
            <Grid container spacing={4}>
              {cartItems.map((item) => (
                <Grid item xs={12} md={8} key={item.id} mx="auto">
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      borderRadius: 3,
                      boxShadow: 3,
                      maxWidth: 800,
                      mx: "auto",
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        width: 100,
                        height: 100,
                        objectFit: "cover",
                        borderRadius: 2,
                        mr: 3,
                      }}
                    />
                    <Box sx={{ flex: 1, minWidth: 200 }}>
                      <Typography variant="h6" fontWeight={600}>
                        {item.name}
                      </Typography>
                      <Typography color="text.secondary" fontSize={15}>
                        ₹{item.price} × {item.quantity} = ₹
                        {item.price * item.quantity}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: { xs: 2, sm: 0 },
                      }}
                    >
                      <TextField
                        type="number"
                        size="small"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        sx={{ width: 80 }}
                        inputProps={{ min: 1 }}
                      />
                      <IconButton
                        onClick={() => handleRemove(item.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Subtotal: ₹{totalPrice.toLocaleString()}
              </Typography>
              <Button variant="contained" size="large">
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
