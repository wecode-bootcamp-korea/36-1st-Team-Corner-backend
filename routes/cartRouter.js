const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.delete("/", auth.validationToken, cartController.deleteAllCart);
router.delete("/:productId", auth.validationToken, cartController.deleteCart);
router.get("", auth.validationToken, cartController.getCarts);
router.post("/product/:productId", auth.validationToken, cartController.postCart);
router.get("/counting", auth.validationToken, cartController.countUserCart);
router.patch("/:productId", auth.validationToken, cartController.chooseQuantity)
module.exports = {
    router}
