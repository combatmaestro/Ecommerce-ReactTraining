import React,{useState} from "react";
import {Container,Box,TextField,Typography,Button,Paper,Link} from '@mui/material';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login (){
    const navigate = useNavigate();
    const [form,setForm] = useState({email:'',password:''})

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value});

    }

    const handleLogin = () =>{
        if(form.email && form.password){
            alert('Logged in')
        }else{
            alert('please fill in details')
        }
    }



    return(
        <>
          <Header />
            <Container sx={{ py: 8 }}>
        <Paper sx={{ maxWidth: 400, mx: "auto", p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Login to Your Account
          </Typography>

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

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography variant="body2" mt={2} textAlign="center">
            Don't have an account?{" "}
            <Link href="/register" underline="hover">
              Register
            </Link>
          </Typography>
        </Paper>
      </Container>
          <Footer />
        </>
    )
}