import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>page not find</div>} />
      </Routes>
    </div>
  );
}

export default App;
