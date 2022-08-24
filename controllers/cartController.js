const cartService = require("../services/cartService");

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

 const selectAllCart = async (req, res) => {
    try {
        const userId = req.userId;
        
        const selectAllCart = await cartService.selectAllCart(userId);
        return res.status(201).json({
            "data" : selectAllCart
        });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
    }
 }

const deleteCart = async (req, res) => {
  try {
    
    const userId = req.userId;
    const {productId} = req.params;
    
    await cartService.deleteCart(userId, productId);
    return res.status(204).json({
      message: "CART_DELETE_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const chooseQuantity = async (req, res) => {
  try {
    const { quantity } = req.body
    const { productId } = req.params;
    const userId = req.userId;
    
    if (!quantity) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await cartService.chooseQuantity(quantity, productId, userId);
    return res.status(201).json({
      message: "QUANTITY_ADD_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {deleteAllCart, selectAllCart, deleteCart, chooseQuantity}