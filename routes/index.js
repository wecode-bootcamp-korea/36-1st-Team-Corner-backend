const express = require("express");
const router = express.Router();

const {authRouter} = require("./authRouter");
const {productRouter} = require("./productRouter")
const reviewRouter = require("./reviewRouter");
const commonRouter = require("./commonRouter");
const cartRouter = require("./cartRouter");

router.use("/product",productRouter);
router.use("/auth", authRouter);
router.use("/review", reviewRouter.router);
router.use("/common", commonRouter.router);
router.use("/carts", cartRouter.router)

module.exports = router;

