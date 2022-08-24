const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/product/:productId", auth.validationToken, cartController.postCart);
router.delete("/user/product", auth.validationToken, cartController.deleteAllCart);
router.get("/user", auth.validationToken, cartController.selectAllCart);
router.delete("/user/product/:productId", auth.validationToken, cartController.deleteCart);
router.patch("/user/product/:productId", auth.validationToken, cartController.chooseQuantity)

module.exports = {router}
