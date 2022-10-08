import Home from "./components/Home";
import './App.scss'
import { CartProvider } from "./context/cart";
import { ProductProvider } from "./context/products";
 
function App() {
  return ( 
     
      <ProductProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </ProductProvider>
     

  );
}

export default App;
