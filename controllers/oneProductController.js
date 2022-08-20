const oneProductController = require("../services/oneProductService")

const productSearch = async (req, res) => {
    
    const {id} = req.params
    
    if (!id) {
        return res.status(400).json({ message: 'UNKNOWN_VALUE' });
    }
    try {const list = await oneProductController.productSearch(id)
        res.status(200).json({data: list})

    }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}

module.exports = {productSearch}