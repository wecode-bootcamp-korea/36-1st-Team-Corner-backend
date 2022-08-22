const productService = require('../services/productService');

const categoryList = async (req, res) => {
    
    const pageInfo = req.query;
    
    const cate = parseInt(pageInfo.cate);
    const page = parseInt(pageInfo.page);
    console.log(pageInfo)
    if (!page) {
        return res.status(400).json({ message: 'NULL_VALUE' });
    }
    try {
        if(!cate){
            const list = await productService.allList(page)
            res.status(200).json({data: list})
        }

            else{const list = await productService.categoryList(cate, page)
        res.status(200).json({data: list})}

    }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

const productSearch = async (req, res) => {
    
    const pageInfo = req.query;
    const word = pageInfo["q"]
    console.log(word)
    if (!word) {
        return res.status(400).json({ message: 'NONE_WORD' });
    }
    try {const list = await productService.productSearch(word)
        res.status(200).json({data: list})

    }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

const productInformation = async (req, res) => {
    
    const {id} = req.params
    
    if (!id) {
        return res.status(400).json({ message: 'UNKNOWN_VALUE' });
    }
    try {const list = await productService.productInformation(id)
        res.status(200).json({data: list})

    }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

module.exports = {categoryList, productSearch, productInformation}