const express = require("express");
const reviewController = require("../controllers/reviewController");
const auth = require("../middlewares/auth");
const commonAuth = require("../utils/commonAuth");

const router = express.Router();

router.post("/:product/:productId", auth.validationToken, reviewController.postReview);
router.patch("/:product/:productId", auth.validationToken, reviewController.patchReview);
router.delete("/:product/:productId", auth.validationToken, reviewController.deleteReview);
router.get("/:product/:productId", reviewController.getReviewList);
router.get("/:product/:productId/access",commonAuth.commonAuth);
router.post("/product/:productId", auth.validationToken, reviewController.postReview);

module.exports = {
    router
}