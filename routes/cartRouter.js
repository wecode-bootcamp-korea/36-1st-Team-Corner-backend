const express = require("express");
const cartController = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/user", auth.validationToken, cartController.selectAllCart);

module.exports = {router}
