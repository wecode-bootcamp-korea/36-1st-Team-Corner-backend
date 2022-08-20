const productsService = require('../services/productsService');

const categoryList = async (req, res) => {
    
    const pageInfo = req.query;
    
    const cate = parseInt(pageInfo.cate);
    
    if (!cate) {
        return res.status(400).json({ message: 'NULL_VALUE' });
    }
    try {const list = await productsService.categoryList(cate)
        res.status(200).json({data: list})

    }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

const productsSearch = async (req, res) => {
    
    const pageInfo = req.query;
    const word = pageInfo["q"]
    console.log(word)
    if (!word) {
        return res.status(400).json({ message: 'NONE_WORD' });
    }
    try {const list = await productsService.productsSearch(word)
        res.status(200).json({data: list})

    }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

module.exports = {categoryList, productsSearch}