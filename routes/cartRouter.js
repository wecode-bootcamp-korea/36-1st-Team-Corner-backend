const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/cart/:productId", auth.validateToken, cartController.postCart);
router.delete("/cart/:productId", auth.validateToken, cartController.deleteAllCart);

module.exports = {
    router
}