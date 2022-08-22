const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/product/:productId", auth.validationToken, cartController.postCart);
router.delete("/product", auth.validationToken, cartController.deleteAllCart);
router.get("/product", auth.validationToken, cartController.selectAllCart);

module.exports = {router}
