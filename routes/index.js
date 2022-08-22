const express = require("express");
const router = express.Router();

const {authRouter} = require("./authRouter");
const {mainRouter} = require("./mainRouter")
const {productRouter} = require("./productRouter")
const reviewRouter = require("./reviewRouter");

router.use("/",mainRouter);
router.use("/product",productRouter);
router.use("/auth", authRouter);
router.use("/review", reviewRouter.router);


module.exports = router;

