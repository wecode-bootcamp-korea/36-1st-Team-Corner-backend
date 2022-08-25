const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("", auth.validationToken, cartController.getCarts);
router.post("/product/:productId", auth.validationToken, cartController.postCart);
router.get("/counting", auth.validationToken, cartController.countUserCart);

module.exports = {
    router}

