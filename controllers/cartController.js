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
      message: "CART_DELETE_SUCCESS"
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};
module.exports = {deleteAllCart, deleteCart}