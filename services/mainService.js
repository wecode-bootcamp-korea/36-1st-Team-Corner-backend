const mainDao = require("../models/mainDao")

const searchList = async (page, pageSize) => {

    try {let start = 0;
    
        if (page <= 0) {
          page = 1;
        } else {
          start = (page - 1) * pageSize;
        }
  
    const getProducts = await mainDao.getProducts(start, pageSize);

    return getProducts}
    catch (err) {
        res
          .status(err.statusCode ? err.statusCode : 401)
          .json({ message: err.message });
      }
    };

module.exports = {searchList}