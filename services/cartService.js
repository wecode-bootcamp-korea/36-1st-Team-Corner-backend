const cartDao = require("../models/cartDao");
const {validateproductId } = require("../utils/validation");

const deleteAllCart = async (userId) => {

    const deleteAllCart = await cartDao.deleteAllCart(userId);
    
    return deleteAllCart;
  };
  
const deleteCart = async (userId, productId) => {
    validateproductId(productId);
  
    const deleteOneCart = await cartDao.deleteOneCart(userId, productId);
    
    return deleteOneCart;
  };
  module.exports = {deleteAllCart, deleteCart};