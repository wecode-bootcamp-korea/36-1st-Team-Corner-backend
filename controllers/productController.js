const productService = require('../services/productService');

const productList = async (req, res) => {
    
    const pageInfo = req.query;

     try{const list = await productService.productList(pageInfo)
        res.status(200).json({data: list})}

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

module.exports = {productList, productSearch, productInformation}