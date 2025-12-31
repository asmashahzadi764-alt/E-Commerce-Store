const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String } // URL ya local path
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
