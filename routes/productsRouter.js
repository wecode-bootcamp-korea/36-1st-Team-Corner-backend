const express = require('express');
const productsController = require('../controllers/productsController')

const productsRouter = express.Router();

productsRouter.get('/list',productsController.categoryList)
productsRouter.get('/search',productsController.productsSearch)

module.exports = {productsRouter}