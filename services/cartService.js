const cartDao = require("../models/cartDao");
const productDao = require("../models/productDao")
const { validateQuantity, validateproductId } = require("../utils/validation");

const deleteAllCart = async (userId) => {

    const deleteAllCart = await cartDao.deleteAllCart(userId);
    
    return deleteAllCart;
  };
  
const deleteCart = async (userId, productId) => {
    validateproductId(productId);
    
    const AllProduct = await productDao.checkAllProduct()
    
    if(productId>AllProduct){
      const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
    }

    const deleteOneCart = await cartDao.deleteOneCart(userId, productId);
    
    return deleteOneCart;
  };

const getCarts = async (userId) => {
  
    const getAllCart = await cartDao.getAllCart(userId)
      return getAllCart
    }

const postCart = async (quantity, productId, userId) => {
  validateproductId(productId);
  validateQuantity(quantity);

  const existProduct = await cartDao.existProduct(productId);
  const checkCart = await cartDao.existCart(productId, userId);
  const checkStock = await cartDao.checkStock(productId);

  if (!existProduct) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }

  if (quantity == 0) {
    const err = new Error("QUANTITY_CANNOT_BE_ZERO");
    err.statusCode = 400;
    throw err;
  }

  if(quantity <= checkStock) {

    if (checkCart === 0) {
      const postCart = await cartDao.postCart(quantity, productId, userId);
  
      return postCart;
    } else if (checkCart > 0) {
      const updateCart = await cartDao.updateCart(quantity, productId, userId);
  
      return updateCart;
    }
  } else {
    const err = new Error("CANNOT_ORDER_QUANTITY_LARGER_THAN_STOCK");
    err.statusCode = 400;
    throw err;
  }
};

const countUserCart = async (userId) => {
  const cartCounting = await cartDao.countUserCart(userId);

  return cartCounting;
};

module.exports = {getCarts, postCart, countUserCart, deleteAllCart, deleteCart };


