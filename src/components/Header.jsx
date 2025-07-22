import React from 'react';
import {AppBar,Toolbar,Typography,IconButton,Badge,Box,Button }from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Header(){

   const handleShopClick = () => {
     window.location.href = '/products'; // Redirect to the product list page
     }

    return(
       <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyShop
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" onClick={handleShopClick}>Shop</Button>
          <Button color="inherit">About</Button>
          {/* <Button color="inherit">Products</Button> */}
          <Button color="inherit">Contact</Button>
        </Box>
        <IconButton color="inherit">
          <Badge badgeContent={2} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
    )
}