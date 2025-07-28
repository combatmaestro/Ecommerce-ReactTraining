// src/pages/Orders.jsx
import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const mockOrders = [
  {
    id: "ORD123456",
    date: "2025-07-12",
    amount: 1799,
    status: "Delivered",
  },
  {
    id: "ORD123457",
    date: "2025-07-10",
    amount: 2999,
    status: "Shipped",
  },
  {
    id: "ORD123458",
    date: "2025-07-05",
    amount: 849,
    status: "Cancelled",
  },
];

export default function Orders() {
  return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          My Orders
        </Typography>

        {mockOrders.length === 0 ? (
          <Typography>No orders found.</Typography>
        ) : (
          mockOrders.map((order) => (
            <Paper key={order.id} sx={{ p: 3, mb: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    <strong>Order ID:</strong> {order.id}
                  </Typography>
                  <Typography>
                    <strong>Date:</strong> {order.date}
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Typography>
                    <strong>Amount:</strong> ₹{order.amount}
                  </Typography>
                  <Typography>
                    <strong>Status:</strong> {order.status}
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sm={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Button variant="outlined" disabled>
                    View Details
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))
        )}
      </Container>
      <Footer />
    </>
  );
}
