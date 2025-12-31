import axios from "axios";

const API_URL = "http://localhost:5000/api/cart";

// Add to Cart - expects payload { user, products }
export const addToCart = async (payload) => {
  const response = await axios.post(API_URL, payload);
  return response.data;
};

// Get Cart by User ID
export const getCart = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

// Update Cart
export const updateCart = async (cartId, products) => {
  const response = await axios.put(`${API_URL}/${cartId}`, { products });
  return response.data;
};

// Delete Cart
export const deleteCart = async (cartId) => {
  const response = await axios.delete(`${API_URL}/${cartId}`);
  return response.data;
};
