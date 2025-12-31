const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Helper: populate only valid ObjectId productIds
async function populateCartProducts(cart) {
  if (!cart) return cart;
  const cartObj = cart.toObject ? cart.toObject() : cart;
  const products = cartObj.products || [];

  const validIds = products
    .map((p) => {
      const pid = p.productId;
      if (pid && mongoose.Types.ObjectId.isValid(pid)) return String(pid);
      return null;
    })
    .filter(Boolean);

  let found = [];
  if (validIds.length > 0) {
    found = await Product.find({ _id: { $in: validIds } }).lean();
  }

  // replace productId with product doc when available
  cartObj.products = products.map((p) => {
    const pid = p.productId;
    const pidStr = pid && mongoose.Types.ObjectId.isValid(pid) ? String(pid) : null;
    if (pidStr) {
      const prod = found.find((f) => String(f._id) === pidStr);
      if (prod) return { ...p, productId: prod };
    }
    return p; // keep as-is (string id or already meta)
  });

  return cartObj;
}

// Create / Add to Cart
router.post("/", async (req, res) => {
  try {
    const { user, products } = req.body;

    if (!user || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ message: "Valid user id is required" });
    }

    const updatedProducts = products.map(p => {
      const pid = p.productId;
      let productIdValue = pid;
      if (pid && mongoose.Types.ObjectId.isValid(pid)) {
        productIdValue = new mongoose.Types.ObjectId(pid);
      }
      return {
        productId: productIdValue,
        meta: p.meta || {},
        quantity: p.quantity || 1
      };
    });

    // If cart exists for user, merge incoming products
    const userObjId = new mongoose.Types.ObjectId(user);
    let cart = await Cart.findOne({ user: userObjId });
    if (cart) {
      updatedProducts.forEach((incoming) => {
        const matchIndex = cart.products.findIndex((existing) => {
          const a = existing.productId && existing.productId._id ? String(existing.productId._id) : String(existing.productId);
          const b = incoming.productId && incoming.productId._id ? String(incoming.productId._id) : String(incoming.productId);
          return a === b;
        });
        if (matchIndex > -1) {
          cart.products[matchIndex].quantity += incoming.quantity;
        } else {
          cart.products.push(incoming);
        }
      });
      await cart.save();
    } else {
      cart = new Cart({ user: userObjId, products: updatedProducts });
      await cart.save();
    }

    const populatedCart = await populateCartProducts(cart);
    res.status(201).json(populatedCart);
  } catch (err) {
    res.status(400).json({ errors: err.errors, message: err.message });
  }
});

// Get Cart by User ID
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const cartDoc = await Cart.findOne({ user: userId });
    const cart = await populateCartProducts(cartDoc);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found for this user" });
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Cart Item
router.put("/:id", async (req, res) => {
  try {
    const cartId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(cartId)) {
      return res.status(400).json({ message: "Invalid cart ID" });
    }

    const { products } = req.body;

    const updatedProducts = products.map(p => {
      const pid = p.productId;
      let productIdValue = pid;
      if (pid && mongoose.Types.ObjectId.isValid(pid)) {
        productIdValue = new mongoose.Types.ObjectId(pid);
      }
      return {
        productId: productIdValue,
        meta: p.meta || {},
        quantity: p.quantity || 1
      };
    });

    const updatedCartDoc = await Cart.findByIdAndUpdate(
      cartId,
      { $set: { products: updatedProducts } },
      { new: true }
    );
    const updatedCart = await populateCartProducts(updatedCartDoc);

    if (!updatedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete Cart
router.delete("/:id", async (req, res) => {
  try {
    const cartId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(cartId)) {
      return res.status(400).json({ message: "Invalid cart ID" });
    }

    const deletedCart = await Cart.findByIdAndDelete(cartId);

    if (!deletedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ message: "Cart has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
