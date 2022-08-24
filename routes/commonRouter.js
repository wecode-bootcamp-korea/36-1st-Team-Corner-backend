const express = require("express");
const commonAuth = require("../utils/commonAuth");

const router = express.Router();

router.get("/access", commonAuth.commonAuth);

module.exports = {router}
