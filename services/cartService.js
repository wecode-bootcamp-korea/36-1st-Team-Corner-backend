const cartDao = require("../models/cartDao");

const selectAllCart = async (userId) => {
    
    const getAllCart = await cartDao.getAllCart(userId)
      return getAllCart
    }
module.exports = {selectAllCart};