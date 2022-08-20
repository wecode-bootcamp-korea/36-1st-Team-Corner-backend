const productsDao = require("../models/productsDao")

const categoryList = async (cate) => {
    
    try{
    const getCategoryList = await productsDao.getCategoryList(cate);
    return getCategoryList}
    
    catch (err) {
        res
          .status(err.statusCode ? err.statusCode : 401)
          .json({ message: err.message });
      }}

const productsSearch = async (word) => {

    try{
    const getProductsList = await productsDao.getProductsList(word);
    return getProductsList
    }
    catch (err) {
        res
          .status(err.statusCode ? err.statusCode : 401)
          .json({ message: err.message });
      }}

    
module.exports = {categoryList, productsSearch}