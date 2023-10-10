import React from 'react';
import Home from './routes/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Navbar should not be a route, it should be a part of the layout */}
        <Route element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
        {/* Catch-all route should be placed at the end */}
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
