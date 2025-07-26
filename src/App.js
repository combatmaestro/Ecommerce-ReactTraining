import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/productDetails';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import OrderSucess from './pages/orderSucess';

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/products" element={<ProductList />} />
       <Route path="/products/:id" element={<ProductDetails />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/checkout" element={<Checkout />} />
       <Route path="/order-success" element={<OrderSucess />} />
     </Routes>
   </Router>
  );
}

export default App;
