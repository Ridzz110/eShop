import './App.css';
import Navbar from './home/navbar/navbar';
import Shop from './pages/Shop'; 
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Product from './pages/products';
import Formal from './pages/formal';
import Casual from './pages/casual';
import ProductPage from './pages/product_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all_product" element={<Product />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/categories/formal" element={<Formal />} />
        <Route path="/categories/casual" element={<Casual />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
