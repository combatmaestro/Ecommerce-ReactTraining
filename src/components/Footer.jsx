// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 4, mt: 5 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              MyShop
            </Typography>
            <Typography variant="body2">
              Your one-stop destination for fashion, electronics, and more.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                About
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Contact
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Terms of Service
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} MyShop. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
