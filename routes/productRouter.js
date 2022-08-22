const express = require('express');
const productController = require('../controllers/productController')

const productRouter = express.Router();

productRouter.get('/list',productController.categoryList)
productRouter.get('/search',productController.productSearch)
productRouter.get('/:id',productController.productInformation)

module.exports = {productRouter}