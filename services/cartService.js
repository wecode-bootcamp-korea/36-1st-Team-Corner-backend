const cartDao = require("../models/cartDao");

const getCarts = async (userId) => {
    console.log(userId)
    const getAllCart = await cartDao.getAllCart(userId)
      return getAllCart
    }
module.exports = {getCarts};