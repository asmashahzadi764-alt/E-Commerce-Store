import React, { useEffect, useState } from "react";
import { getCart, updateCart, deleteCart } from "../services/cartApi";

export default function Cart({ userId }) {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) {
        setCart(null);
        return;
      }
      try {
        const data = await getCart(userId);
        setCart(data);
      } catch (err) {
        if (err.response?.status === 404) {
          setCart({ products: [] });
        } else {
          console.log(err);
        }
      }
    };
    fetchCart();
  }, [userId]);

  const handleQuantityChange = async (productId, qty) => {
    if (!cart) return;
    const updatedProducts = cart.products.map((p) => {
      const pid = p.productId && typeof p.productId === "object" ? (p.productId._id || p.productId.id) : p.productId;
      return pid === productId ? { ...p, quantity: qty } : p;
    });
    try {
      const updatedCart = await updateCart(cart._id, updatedProducts);
      setCart(updatedCart);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (productId) => {
    if (!cart) return;
    const updatedProducts = cart.products.filter((p) => {
      const pid = p.productId && typeof p.productId === "object" ? (p.productId._id || p.productId.id) : p.productId;
      return pid !== productId;
    });
    try {
      const updatedCart = await updateCart(cart._id, updatedProducts);
      setCart(updatedCart);
    } catch (err) {
      console.log(err);
    }
  };

  if (!userId) return <p style={{ textAlign: "center", marginTop: "100px", color: "white" }}>Please login to view your cart.</p>;
  if (!cart) return <p style={{ textAlign: "center", marginTop: "100px", color: "white" }}>Loading Cart...</p>;

  const totalPrice = cart.products.reduce((acc, p) => {
    const price = p.productId && typeof p.productId === "object" ? p.productId.price : p.meta?.price || 0;
    return acc + price * p.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.products.length === 0 && <p className="empty-cart">Your cart is empty.</p>}

      <div className="cart-items-wrapper">
        {cart.products.map((p) => {
          const isPopulated = p.productId && typeof p.productId === "object";
          const pid = isPopulated ? (p.productId._id || p.productId.id) : p.productId;
          const name = isPopulated ? p.productId.name : p.meta?.name || pid;
          const price = isPopulated ? p.productId.price : p.meta?.price || 0;

          return (
            <div key={p._id} className="cart-item-box">
              <h4>{name}</h4>
              <p>Price: ${price}</p>
              <div className="item-actions">
                <input
                  type="number"
                  value={p.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(pid, Number(e.target.value))}
                />
                <button onClick={() => handleRemove(pid)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-footer">
        <h3>Total: ${totalPrice}</h3>
        <button onClick={() => deleteCart(cart._id).then(() => setCart({ products: [] }))}>Clear Cart</button>
      </div>

      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
          font-family: Arial, sans-serif;
          background: #271c3cff;
        }
        .cart-container {
          max-width: 900px;
          margin: 120px auto 50px auto; /* top margin for navbar */
          padding: 20px;
          color: white;
        }
        .cart-title {
          text-align: center;
          font-size: 32px;
          margin-bottom: 30px;
        }
        .empty-cart {
          text-align: center;
          font-size: 18px;
          color: #ccc;
        }
        .cart-items-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .cart-item-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 12px;
          backdrop-filter: blur(6px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
        }
        .cart-item-box:hover {
          transform: translateY(-5px);
        }
        .cart-item-box h4 {
          margin: 0 0 10px 0;
          font-size: 20px;
        }
        .cart-item-box p {
          margin: 0 0 15px 0;
        }
        .item-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .item-actions input {
          width: 60px;
          padding: 6px 8px;
          border-radius: 8px;
          border: none;
          outline: none;
          text-align: center;
        }
        .item-actions button {
          padding: 6px 12px;
          background: #7b5cf6;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          color: white;
          transition: background 0.3s ease;
        }
        .item-actions button:hover {
          background: #6b46c1;
        }
        .cart-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding-top: 15px;
          border-top: 1px solid rgba(255,255,255,0.2);
          z-index: 10;
          position: relative;
        }
        .cart-footer h3 {
          margin: 0;
          font-size: 22px;
        }
        .cart-footer button {
          padding: 10px 20px;
          background: #ff4d4f;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .cart-footer button:hover {
          background: #d9363e;
        }
        @media (max-width: 600px) {
          .cart-footer {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}
