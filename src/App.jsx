import './App.css';
import { CartProvider } from './context/CartContext';
import ProductList from './pages/ProductList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layouts/Navbar';
import Cart from './pages/Cart';
import FilterSearch from './components/FilterSearch';
import { useState } from 'react';
function App() {
  const [searchProducts, setSearchProducts] = useState("");
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar searchbar={
          <FilterSearch
            value={searchProducts}
            onChange={(value) => {
                setSearchProducts(value);
            }}
            />
        }/>
        <Routes>
          <Route path="/" element={
            <ProductList 
            searchProducts={searchProducts}
            />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
