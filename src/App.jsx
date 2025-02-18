import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Cart from "./pages/Cart/index";
import PlaceOrder from "./pages/PlaceOrder/index";
import Footer from "./components/Footer";
import LoginPopUp from "./components/LoginPopUp";

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
      <Footer/>
    </>
  );
};

export default App;
