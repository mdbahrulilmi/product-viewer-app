import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import { CartProvider } from './context/CartContext'

function App() {

  return (
   <CartProvider>
    <ProductList />
    <Cart/>
   </CartProvider>
  )
}

export default App
