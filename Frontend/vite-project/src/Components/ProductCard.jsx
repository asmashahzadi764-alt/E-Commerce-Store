import { useState } from "react";
import { addToCart, getCart } from "../services/cartApi";

// 16 Canvas Items
const products = [
  { _id: "p1", name: "Canvas 1", price: 1500, img: "/images/canvas1.png", desc: "Beautiful artwork canvas." },
  { _id: "p2", name: "Canvas 2", price: 2000, img: "/images/canvas2.png", desc: "Elegant canvas for your home." },
  { _id: "p3", name: "Canvas 3", price: 2500, img: "/images/canvas3.png", desc: "Classic canvas design." },
  { _id: "p4", name: "Canvas 4", price: 3000, img: "/images/canvas4.png", desc: "Colorful artwork." },
  { _id: "p5", name: "Canvas 5", price: 1800, img: "/images/canvas5.png", desc: "Perfect for office decoration." },
  { _id: "p6", name: "Canvas 6", price: 3500, img: "/images/canvas6.png", desc: "Brighten up your room." },
  { _id: "p7", name: "Canvas 7", price: 2200, img: "/images/canvas7.png", desc: "Vibrant colors." },
  { _id: "p8", name: "Canvas 8", price: 2800, img: "/images/canvas8.png", desc: "Aromatic theme." },
  { _id: "p9", name: "Canvas 9", price: 3200, img: "/images/canvas9.png", desc: "Mediterranean vibes." },
  { _id: "p10", name: "Canvas 10", price: 4000, img: "/images/canvas10.png", desc: "Premium artwork." },
  { _id: "p11", name: "Canvas 11", price: 1900, img: "/images/canvas11.png", desc: "Classic design." },
  { _id: "p12", name: "Canvas 12", price: 3600, img: "/images/canvas12.png", desc: "Stunning color palette." },
  { _id: "p13", name: "Canvas 13", price: 2100, img: "/images/canvas13.png", desc: "Compact size." },
  { _id: "p14", name: "Canvas 14", price: 3800, img: "/images/canvas14.png", desc: "Elegant artwork." },
  { _id: "p15", name: "Canvas 15", price: 2700, img: "/images/canvas15.png", desc: "Fruiting theme." },
  { _id: "p16", name: "Canvas 16", price: 2300, img: "/images/canvas16.png", desc: "Mini desktop canvas." },
];

export default function ProductList({ setCartCount, userId }) {
  const [loading, setLoading] = useState({});

  const handleAdd = async (productId) => {
    try {
      setLoading((prev) => ({ ...prev, [productId]: true }));
      if (!userId) {
        alert("Please login to add items to cart.");
        setLoading((prev) => ({ ...prev, [productId]: false }));
        return;
      }

      const product = products.find((x) => x._id === productId);
      const meta = { name: product.name, price: product.price, image: product.img };

      await addToCart({ user: userId, products: [{ productId, quantity: 1, meta }] });
      const cart = await getCart(userId);
      const totalQty = cart.products.reduce((sum, p) => sum + p.quantity, 0);
      setCartCount(totalQty);

      setLoading((prev) => ({ ...prev, [productId]: false }));
    } catch (err) {
      console.log("Add to Cart error:", err);
      alert(err.response?.data?.message || "Failed to add to cart. Please try again.");
      setLoading((prev) => ({ ...prev, [productId]: false }));
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.rowContainer}>
        {products.map((p) => (
          <div key={p._id} style={styles.card}>
            <div style={styles.imgContainer}>
              <img src={p.img} alt={p.name} style={styles.img} />
            </div>
            <h3 style={styles.name}>{p.name}</h3>
            <p style={styles.desc}>{p.desc}</p>
            <p style={styles.price}>Rs {p.price}</p>
            <button
              style={styles.button}
              onClick={() => handleAdd(p._id)}
              disabled={loading[p._id]}
            >
              {loading[p._id] ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    paddingTop: "140px", // navbar offset
    paddingBottom: "20px",
    backgroundColor: "#271c3cff",
    minHeight: "100vh",
  },

  rowContainer: {
    display: "flex",
    gap: "15px",
    padding: "0 20px",
    overflowX: "auto",
  },

  card: {
    minWidth: "200px",
    maxWidth: "200px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    textAlign: "center",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  imgContainer: {
    width: "100%",
    height: "140px", // uniform height for all images
    overflow: "hidden",
    borderRadius: "8px",
    marginBottom: "8px",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // ensures all images fill the container
  },

  name: {
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "4px",
  },

  desc: {
    fontSize: "0.85rem",
    color: "#555",
    marginBottom: "8px",
  },

  price: {
    fontSize: "0.95rem",
    fontWeight: "500",
    marginBottom: "8px",
  },

  button: {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#49366aff",
    color: "#f1eff3ff",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};
