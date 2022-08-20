const express = require("express");

const {authRouter} = require("./authRouter");
const {mainRouter} = require("./mainRouter")
const {productsRouter} = require("./productsRouter")
const {oneProductRouter} = require("./oneProductRouter")

const router = express.Router();

router.use("/auth", authRouter);
router.use("/",mainRouter);
router.use("/products",productsRouter);
router.use("/product",oneProductRouter)

module.exports = router;

