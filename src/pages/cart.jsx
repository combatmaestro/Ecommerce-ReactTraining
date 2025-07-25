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
    image: "https://source.unsplash.com/featured/?bluetooth,speaker",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 799,
    quantity: 2,
    image: "https://source.unsplash.com/featured/?tshirt",
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

  const handleRemoce = (id) => {
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
            {" "}
            Cart is Empty{" "}
          </Typography>
        ) : (
          <>
            <Grid container spacing={4}>
              {cartItems.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      boxShadow: 1,
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
                        borderRadius: 1,
                        mr: 2,
                      }}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography color="text.secondary">
                        ₹{item.price} x {item.quantity} = ₹
                        {item.price * item.quantity}
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        type="number"
                        size="small"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        sx={{ width: 80, mr: 2 }}
                        inputProps={{ min: 1 }}
                      />
                      <IconButton
                        onClick={() => handleRemoce(item.id)}
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
            <Box sx={{ display: "flex", justifyContent: "space-between" , alignItems:'center' , flexWrap:'wrap'}}>
               <Typography variant="h5" fontWeight="bold"> SubTotal : ₹{totalPrice} </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              sx = {{mt : {xs : 2, md: 0}}}
              >
              Proceed to Checkout
              </Button>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
