import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ProductDetail from "./Pages/ProductDetail";
import { useState } from "react";
import{ToastContainer,toast} from 'react-toastify'
import Cart from "./Pages/Cart";


function App() {
  const[cartItems,setCartItems]=useState([]);
 

  return (
    
    <>
       <div className="App">
      <BrowserRouter>
      <div>
        <ToastContainer theme="dark" position="bottom-center"/>
      <Header cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/search" element={<Home />}/>
        <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
