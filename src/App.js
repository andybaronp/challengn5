import Home from "./components/Home";
import './App.scss'
import { CartProvider } from "./context/cart";
import { ProductProvider } from "./context/products";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewProduct from "./components/addProduct/NewProduct";

function App() {
  return ( 

      <ProductProvider>
        <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" replace element={<Navigate to="/" />} />
            <Route path="/newproduct" element={<NewProduct />}/>
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    

  );
}

export default App;
