const cartService = require("../services/cartService");

const postCart = async (req, res) => {
  try {
    const { quantity } = req.body;
    const { productId } = req.params;
    const userId = req.userId;

    if (!quantity) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await cartService.postCart(quantity, productId, userId);
    return res.status(201).json({
      message: "CART_ADD_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const deleteAllCart = async (req, res) => {
  try {
    const userId = req.userId;

    await cartService.deleteAllCart(userId);
    return res.status(204).json({
      message: "CART_DELETE_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { postCart, deleteAllCart };
