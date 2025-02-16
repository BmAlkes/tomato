import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Cart from "./pages/Cart/index";
import PlaceOrder from "./pages/PlaceOrder/index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
