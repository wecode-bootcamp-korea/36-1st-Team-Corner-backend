const productService = require('../services/productService');

const productList = async (req, res) => {
    try{
    const pageInfo = req.query;
    
    const page = parseInt(pageInfo.page)
    const pageSize = parseInt(pageInfo.pageSize)
    const cate = parseInt(pageInfo.cate)
    const orderBy = pageInfo["orderBy"]

    if(!page || !pageSize){
        return res.status(400).json({ message: 'UNKNOWN_VALUE' })}
    
        const list = await productService.productList(page, pageSize, cate, orderBy)
        
        res.status(200).json({products: list[0], count : list[1]})
        }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

const productSearch = async (req, res) => {
    try {
    const pageInfo = req.query;
    const word = pageInfo["q"]
    
    if (!word) {
        return res.status(400).json({ message: 'NONE_WORD' });
    }
    const list = await productService.productSearch(word)
        
    res.status(200).json({data: list})}

    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

const productInformation = async (req, res) => {
    
    try {
    const {id} = req.params
    
    if (!id) {
        return res.status(400).json({ message: 'UNKNOWN_VALUE' });
    }
    const list = await productService.productInformation(id)
        res.status(200).json({data: list})
}
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

module.exports = {productList, productSearch, productInformation}