import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";

// ✅ Correct logo import
import logo from "./assets/navbar-logo.png";
import { getCart } from "./services/cartApi";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [userId, setUserId] = useState(() => {
    try {
      return localStorage.getItem("userId") || null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) return;
      try {
        const cart = await getCart(userId);
        const totalQty = cart.products.reduce((s, p) => s + p.quantity, 0);
        setCartCount(totalQty);
      } catch (e) {
        // no cart or error -> reset count
        setCartCount(0);
      }
    };
    fetchCart();
  }, [userId]);

  return (
    <Router>
      {/* ✅ Logo & Cart Count Navbar ko pass */}
      <Navbar cartCount={cartCount} logo={logo} />

      <Routes>
        <Route path="/" element={<ProductCard setCartCount={setCartCount} userId={userId} />} />
        <Route path="/cart" element={<Cart userId={userId} />} />
        <Route path="/login" element={<Login setUserId={setUserId} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
