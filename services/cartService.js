const cartDao = require("../models/cartDao");
const {validateproductId } = require("../utils/validation");
const productDao = require("../models/productDao")

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
  module.exports = {deleteAllCart, deleteCart};