const mainDao = require("../models/mainDao")

const searchList = async () => {
  try{
    const getProducts = await mainDao.getProducts();

    return getProducts}
    catch (err) {
        res
          .status(err.statusCode ? err.statusCode : 401)
          .json({ message: err.message });
      }
    };

module.exports = {searchList}