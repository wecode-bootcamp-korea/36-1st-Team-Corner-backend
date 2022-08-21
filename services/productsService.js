const productsDao = require("../models/productsDao")

const allList = async (page) => {

  try{
      let start = 0;
      let pageSize = 9;
      if (page <= 0) {
        page = 1;
      } else {
        start = (page - 1) * pageSize;
      }
      
    const getAllList = await productsDao.getAllList(start);
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
        
      const getCategoryList = await productsDao.getCategoryList(cate, start);
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

    
module.exports = {categoryList, productsSearch, allList}