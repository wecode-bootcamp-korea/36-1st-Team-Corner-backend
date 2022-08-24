const cartDao = require("../models/cartDao");
const { validateQuantity, validateproductId } = require("../utils/validation");

const deleteAllCart = async (userId) => {

  const deleteAllCart = await cartDao.deleteAllCart(userId);
  
  return deleteAllCart;
};

const selectAllCart = async (userId) => {
    
  const getAllCart = await cartDao.getAllCart(userId)
    return getAllCart
  }

const deleteCart = async (userId, productId) => {
  validateproductId(productId);

  const deleteOneCart = await cartDao.deleteOneCart(userId, productId);
  
  return deleteOneCart;
};

const chooseQuantity = async (quantity, productId, userId) => {
  
  validateproductId(productId);
  validateQuantity(quantity);
  
  const existProduct = await cartDao.existProduct(productId);
  const checkStock = await cartDao.checkStock(productId);
  
  if (!existProduct) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }
  
  if(quantity > checkStock){
    const err = new Error("CANNOT_ORDER_QUANTITY_LARGER_THAN_STOCK");
    err.statusCode = 401;
    throw err;
  }

  if (parseInt(quantity) === 0) {
    const deleteOneCart = await cartDao.deleteOneCart(userId, productId);
    return deleteOneCart;
  } 
  else if (parseInt(quantity) > 0) {
    const updateQuantity = await cartDao.updateQuantity(quantity, productId, userId);

    return updateQuantity;
  }
};

module.exports = {deleteAllCart, selectAllCart, deleteCart, chooseQuantity };