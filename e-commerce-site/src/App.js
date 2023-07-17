import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Productlist from './pages/Productlist';
import Productview from './pages/Productview';
import Checkout from './pages/Checkout';
import { Initializer } from './components/reducer/initialreducer';




function App() {
  return (
<Initializer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/Productview" element={<Productview />} />
        <Route path="/Checkout" element={<Checkout />} />


      </Routes>
    </BrowserRouter>
    </Initializer>
  );
}

export default App;
