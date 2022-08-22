const express = require("express");
const router = express.Router();

const {authRouter} = require("./authRouter");
const reviewRouter = require("./reviewRouter");
const cartRouter = require("./cartRouter")

router.use("/auth", authRouter);
router.use("/product", reviewRouter.router);
router.use("/cart", cartRouter.router)

module.exports = router;

