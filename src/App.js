import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/productDetails';

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/products" element={<ProductList />} />
       <Route path="/products/:id" element={<ProductDetails />} />
     </Routes>
   </Router>
  );
}

export default App;
