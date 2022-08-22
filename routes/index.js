const express = require("express");
const router = express.Router();

const {authRouter} = require("./authRouter");
const {mainRouter} = require("./mainRouter")
const {productsRouter} = require("./productsRouter")
const {oneProductRouter} = require("./oneProductRouter")
const reviewRouter = require("./reviewRouter");


router.use("/auth", authRouter);
router.use("/",mainRouter);
router.use("/products",productsRouter);
router.use("/product",oneProductRouter)
router.use("/auth", authRouter);
router.use("/product", reviewRouter.router);


module.exports = router;

