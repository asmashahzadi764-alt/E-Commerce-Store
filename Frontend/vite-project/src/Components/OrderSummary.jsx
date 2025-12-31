import React from "react";

export default function OrderSummary({ cart }) {
  if (!cart) return <p>No items in cart</p>;

  const total = cart.products.reduce((acc, p) => acc + p.productId.price * p.quantity, 0);

  const handlePlaceOrder = () => {
    alert(`Order Placed! Total: $${total}`);
    // Aage backend endpoint call karna hoga order save ke liye
  };

  return (
    <div>
      <h2>Order Summary</h2>
      {cart.products.map((p) => (
        <div key={p._id}>
          {p.productId.name} x {p.quantity} = ${p.productId.price * p.quantity}
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}
