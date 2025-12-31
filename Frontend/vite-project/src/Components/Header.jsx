import { useEffect, useState } from "react";
import { getCart } from "../services/cartApi";

export default function Header() {
  const [count, setCount] = useState(0);

  const fetchCart = async () => {
    try {
      const cart = await getCart();
      if (cart.products) {
        const totalQty = cart.products.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        setCount(totalQty);
      }
    } catch (err) {
      console.log("Cart fetch error:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <header>
      <h1>My E-Commerce Store</h1>
      <div className="cart">
        🛒 Cart: <span>{count}</span>
      </div>
    </header>
  );
}
