import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { name, email, password, confirmPassword } = form;
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created");
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container sx={{ py: 8 }}>
        <Paper sx={{ maxWidth: 400, mx: "auto", p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Create an Account
          </Typography>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            margin="normal"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>
           <Typography variant="body2" mt={2} textAlign="center">
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
        </Paper>
       
      </Container>
      <Footer />
    </>
  );
}

export default Register;
