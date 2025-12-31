import React, { useState } from "react";
import { registerUser } from "../services/authApi";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await registerUser(form);
      setMessage(" User Registered Successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || " Registration Failed. Try again.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center", // horizontal center
      alignItems: "flex-start", // start from top
      minHeight: "100vh",       // full viewport height
      width: "100vw",
      background: "linear-gradient(135deg, #271c3cff, #51119076)",
      fontFamily: "Arial, sans-serif",
      overflow: "auto",         // allow scrolling if form is taller
      paddingTop: "100px",      // space from navbar
      paddingBottom: "50px",    // ensure bottom space
      boxSizing: "border-box",
    },
    form: {
      backgroundColor: "#fff",
      padding: "40px 30px",
      borderRadius: "15px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
      animation: "fadeInUp 0.5s ease forwards",
    },
    title: {
      marginBottom: "30px",
      fontSize: "28px",
      color: "#271c3cff",
      fontWeight: "600",
    },
    label: {
      fontWeight: "500",
      marginBottom: "5px",
      marginTop: "10px",
      color: "#333",
      textAlign: "left",
    },
    input: {
      padding: "14px 16px",
      marginBottom: "15px",
      border: "2px solid #ddd",
      borderRadius: "10px",
      fontSize: "16px",
      outline: "none",
      transition: "0.3s",
      width: "100%",
      boxSizing: "border-box",
    },
    passwordWrapper: { position: "relative", marginBottom: "20px" },
    togglePassword: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#8e2de2",
      fontWeight: "500",
      userSelect: "none",
    },
    message: {
      textAlign: "center",
      marginBottom: "15px",
      fontWeight: "500",
      color: "#4a00e0",
    },
    button: {
      padding: "14px",
      backgroundColor: "#271c3cff",
      color: "white",
      fontSize: "16px",
      fontWeight: "500",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Create Account</h2>

        <label style={styles.label} htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label} htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label} htmlFor="password">Password</label>
        <div style={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <span
            style={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {message && <p style={styles.message}>{message}</p>}

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4a00e0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#8e2de2")}
        >
          Register
        </button>
      </form>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        input:focus {
          border-color: #8e2de2;
          box-shadow: 0 0 8px rgba(142, 45, 226, 0.5);
        }
      `}</style>
    </div>
  );
}
