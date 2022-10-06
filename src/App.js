import Home from "./components/Home";
import './App.scss'
import {  CartProvider } from "./context/cart";
import { ProductsProvider } from "./context/Products";

function App() {
  return ( 
    <CartProvider>
      <ProductsProvider>   
      <Home />
    </ProductsProvider>
    </CartProvider>


  );
}

export default App;
