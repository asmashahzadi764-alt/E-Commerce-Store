import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div style={styles.cart}>
            🛒
            {cartCount > 0 && (
              <span style={styles.cartCount}>{cartCount}</span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

/* ================= STYLES ================= */

const styles = {
  navbar: {
    width: "100%",
    height: "120px",                 // 🔥 banner height
    backgroundImage: "url('/navbar-logo.png')",
    backgroundSize: "cover",         // 🔥 full banner
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    padding: "0 50px",
    boxSizing: "border-box",
  },

  navContent: {
    display: "flex",
    alignItems: "center",
    gap: "35px",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
  },

  cart: {
    position: "relative",
    fontSize: "1.6rem",
    cursor: "pointer",
    color: "#ffffff",
  },

  cartCount: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    background: "#22c55e",
    color: "#fff",
    borderRadius: "50%",
    padding: "3px 7px",
    fontSize: "0.7rem",
    fontWeight: "700",
  },
};

export default Navbar;
