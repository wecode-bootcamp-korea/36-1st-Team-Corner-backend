const cartDao = require("../models/cartDao");

const getCarts = async (userId) => {
  
    const getAllCart = await cartDao.getAllCart(userId)
      return getAllCart
    }
module.exports = {getCarts};