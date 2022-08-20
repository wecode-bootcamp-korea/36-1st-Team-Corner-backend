const oneProductDao = require("../models/oneProductDao")

const productSearch = async (id) => {
    
    try{
    const getProduct = await oneProductDao.getProduct(id);
    return getProduct}
    
    catch (err) {
        res
          .status(err.statusCode ? err.statusCode : 401)
          .json({ message: err.message });
      }}

module.exports = {productSearch}