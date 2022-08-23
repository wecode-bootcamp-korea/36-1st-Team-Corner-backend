const productDao = require("../models/productDao")

const productList = async (pageInfo) => {
    
    const orderBy = pageInfo["orderBy"]
    const cate = parseInt(pageInfo.cate)
    const page = parseInt(pageInfo.page)
    let pageSize = parseInt(pageInfo.pageSize)
    
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

    if(!orderBy){
      const getList = await productDao.getList(cate, start, pageSize);
    return getList}
    else{
      const getOrderByList = await productDao.getOrderByList(orderBy, cate, start, pageSize)
      return getOrderByList
    }}

const productSearch = async (word) => {

    const getProductList = await productDao.getProductList(word);
    return getProductList}
    
const productInformation = async (id) => {
    
    const getProduct = await productDao.getProduct(id);
    return getProduct}
        
module.exports = {productList, productSearch, productInformation}