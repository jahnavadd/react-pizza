import React, {useEffect} from "react";
import {Header} from './components'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
