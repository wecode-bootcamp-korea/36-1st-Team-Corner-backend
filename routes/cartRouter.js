const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/product/:productId", auth.validateToken, cartController.postCart);

module.exports = {
    router
}