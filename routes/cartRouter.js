const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.delete("/", auth.validationToken, cartController.deleteAllCart);
router.delete("/:productId", auth.validationToken, cartController.deleteCart);

module.exports = {router}