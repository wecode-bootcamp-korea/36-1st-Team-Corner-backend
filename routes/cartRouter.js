const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.delete("/user/product", auth.validationToken, cartController.deleteAllCart);
router.delete("/user/product/:productId", auth.validationToken, cartController.deleteCart);

module.exports = {router}