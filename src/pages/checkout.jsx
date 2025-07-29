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
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Checkout
        </Typography>

        <Grid container spacing={4}>
          {/* LEFT SIDE */}
          <Grid item xs={12} md={7}>
            {/* Shipping Address */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Shipping Address
              </Typography>

              <Grid container spacing={2} mt={1}>
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

            {/* Payment Method */}
            <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
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
                <FormControlLabel
                  value="upi"
                  control={<Radio />}
                  label="UPI"
                />
              </RadioGroup>
            </Paper>
             <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Order Summary
              </Typography>

              <Box display="flex" justifyContent="space-between" my={2}>
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography fontWeight="medium">₹{cartTotal}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" my={2}>
                <Typography color="text.secondary">Shipping</Typography>
                <Typography fontWeight="medium">Free</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between" my={2}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" fontWeight="bold">
                  ₹{cartTotal}
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </Paper>
          </Grid>

          {/* RIGHT SIDE */}
          
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
