const productDao = require("../models/productDao")

const productList = async (page, pageSize, cate, orderBy) => {
    
    const checkAllProduct = await productDao.checkAllProduct();
    
    if(checkAllProduct < pageSize){
      pageSize = 9;
    }
    let start = 0;
    
        if (page <= 0) {
        page = 1;
        } else {
        start = (page - 1) * pageSize;
      }
    const getOrderByList = await productDao.getOrderByList(start, pageSize, cate, orderBy)
      
    return getOrderByList
    }

const productSearch = async (word) => {

    const getProductList = await productDao.getProductList(word);
    return getProductList}
    
const productInformation = async (id) => {
    
    const getProduct = await productDao.getProduct(id);
    return getProduct}
        
module.exports = {productList, productSearch, productInformation}