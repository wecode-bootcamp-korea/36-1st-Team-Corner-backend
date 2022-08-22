const productDao = require("../models/productDao")

const allList = async (page) => {

  try{
      let start = 0;
      let pageSize = 9;
      if (page <= 0) {
        page = 1;
      } else {
        start = (page - 1) * pageSize;
      }
      
    const getAllList = await productDao.getAllList(start);
    return getAllList}
  
  catch (err) {
      res
        .status(err.statusCode ? err.statusCode : 401)
        .json({ message: err.message });
    }}


const categoryList = async (cate, page) => {

    try{
        let start = 0;
        let pageSize = 9;
        if (page <= 0) {
          page = 1;
        } else {
          start = (page - 1) * pageSize;
        }
        
      const getCategoryList = await productDao.getCategoryList(cate, start);
      return getCategoryList}
    
    catch (err) {
        res
          .status(err.statusCode ? err.statusCode : 401)
          .json({ message: err.message });
      }}

const productSearch = async (word) => {

    try{
    const getProductList = await productDao.getProductList(word);
    return getProductList
    }
    catch (err) {
        res
          .status(err.statusCode ? err.statusCode : 401)
          .json({ message: err.message });
      }}

const productInformation = async (id) => {
    
    try{
      const getProduct = await productDao.getProduct(id);
      return getProduct}
        
    catch (err) {
            res
              .status(err.statusCode ? err.statusCode : 401)
              .json({ message: err.message });
          }}
    

    
module.exports = {categoryList, productSearch, allList, productInformation}