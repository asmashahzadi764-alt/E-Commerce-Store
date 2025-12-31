import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authApi";

export default function Login({ setUserId }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(""); // added state for message
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // reset message on submit
    try {
      const res = await loginUser(form);
      const id = res.user?.id || res.user?._id;
      setUserId(id);
      try { localStorage.setItem("userId", id); } catch (e) {}
      setMessage(" Login Successful!");
      // Optional: redirect after short delay
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.log(err);
      setMessage(" Login Failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="login-input"
        />

        {message && <p className="login-message">{message}</p>}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }

        .login-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #271c3cff, #51119076);
          font-family: Arial, sans-serif;
          padding-top: 120px;
          padding-bottom: 50px;
          box-sizing: border-box;
        }

        .login-form {
          background: #ffffff;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          width: 100%;
          max-width: 400px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .login-form:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .login-title {
          margin-bottom: 30px;
          color: #30294fff;
          font-size: 28px;
          font-weight: bold;
        }

        .login-input {
          width: 100%;
          padding: 14px 2px;
          margin: 12px 0;
          border: 2px solid #ddd;
          border-radius: 10px;
          font-size: 16px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .login-input:focus {
          border-color: #6914b4a8;
          outline: none;
          box-shadow: 0 0 8px rgba(123, 92, 246, 0.5);
        }

        .login-button {
          width: 100%;
          padding: 14px;
          margin-top: 20px;
          background: #5e4789ff;
          color: white;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .login-button:hover {
          background: #271c3cff;
          transform: translateY(-2px);
        }

        .login-message {
          margin-top: 10px;
          font-size: 15px;
          font-weight: 500;
          color: #4a00e0;
        }

        @media (max-width: 500px) {
          .login-form {
            padding: 30px 20px;
          }
          .login-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
