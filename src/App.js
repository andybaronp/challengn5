import Home from "./components/Home";
import './App.scss'
import {  CartProvider } from "./context/cart";

function App() {
  return ( 
    <CartProvider>

      <Home />
    </CartProvider>


  );
}

export default App;
