import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Divider,
  Paper,
  Radio,
  FormControlLabel,
  RadioGroup,
  TextField,
  Grid,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Checkout() {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const handleChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  const cartTotal = 3200;

  return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Shipping Address
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    name="name"
                    fullWidth
                    value={shippingInfo.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Address"
                    name="address"
                    fullWidth
                    multiline
                    value={shippingInfo.address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="City"
                    name="city"
                    fullWidth
                    value={shippingInfo.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Pincode"
                    name="pincode"
                    fullWidth
                    value={shippingInfo.pincode}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Paper>

            <Paper sx={{ p: 3, mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Payment Method
              </Typography>
              <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Cash On Delivery"
                />
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Credit/Debit Card"
                />
                <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              </RadioGroup>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3 , mt:4}}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>

              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography>Subtotal</Typography>
                <Typography>₹{cartTotal}</Typography>
              </Box>

               <Box display="flex" justifyContent="space-between" my={1}>
                <Typography>Shipping</Typography>
                <Typography>Free</Typography>
              </Box>

              <Divider />

               <Box display="flex" justifyContent="space-between" my={1}>
                <Typography>Total</Typography>
                <Typography>₹{cartTotal}</Typography>
              </Box>


              <Button 
                variant="contained"
                color="primary"
                fullWidth
                sx={{mt:3}}
                onClick={handlePlaceOrder}
              >
               Place Order
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
