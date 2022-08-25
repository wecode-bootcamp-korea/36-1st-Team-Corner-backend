const cartService = require("../services/cartService");

const deleteAllCart = async (req, res) => {
    try {
      
      const userId = req.userId;
  
      await cartService.deleteAllCart(userId);

      return res.status(200).json({
        message: "CART_DELETE_SUCCESS",
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({ message: err.message });
    }
  };

const deleteCart = async (req, res) => {
  try {
    
    const userId = req.userId;
    const {productId} = req.params;
    
    if(!productId){
      return res.status(400).json({ message: 'UNKNOWN_VALUE' });
    }
    await cartService.deleteCart(userId, productId);

    return res.status(200).json({
      message: "CART_DELETE_SUCCESS"})
    }
    catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({ message: err.message });
    }
  }

const getCarts = async (req, res) => {
    try {
        const userId = req.userId;
        
        const allCart = await cartService.getCarts(userId);
        
        return res.status(201).json({
            "data" : allCart
        });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
    }
 }

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

const countUserCart = async (req, res) => {
  try {
    const userId = req.userId;

    const cartCounting = await cartService.countUserCart(userId);
    return res.status(200).json({
      data: cartCounting});
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getCarts, postCart, countUserCart, deleteAllCart, deleteCart};
