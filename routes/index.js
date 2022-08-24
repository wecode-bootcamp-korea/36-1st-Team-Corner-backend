const express = require("express");
const router = express.Router();

const {authRouter} = require("./authRouter");
const reviewRouter = require("./reviewRouter");
const commonRouter = require("./commonRouter");

router.use("/auth", authRouter);
router.use("/review", reviewRouter.router);
router.use("/common", commonRouter.router);

module.exports = router;

