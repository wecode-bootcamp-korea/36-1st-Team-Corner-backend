const express = require('express');
const oneProductController = require('../controllers/oneProductController')

const oneProductRouter = express.Router();

oneProductRouter.get('/:id',oneProductController.productSearch)

module.exports = {oneProductRouter}