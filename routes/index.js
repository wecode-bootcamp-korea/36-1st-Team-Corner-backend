const express = require("express");
const router = express.Router();

const {authRouter} = require("./authRouter");
const reviewRouter = require("./reviewRouter");

router.use("/auth", authRouter);
router.use("/product", reviewRouter.router);

module.exports = router;

