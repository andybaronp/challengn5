import Home from "./components/Home";
import './App.scss'
import { CartProvider } from "./context/cart";
import { ProductProvider } from "./context/products";
import store from "./components/redux/store";
import { Provider } from "react-redux";
  
function App() {
  const storeS = store()
  return ( 
     
    <ProductProvider>
        <CartProvider>
        <Home />
    </CartProvider>
       </ProductProvider>
     


  );
}

export default App;
