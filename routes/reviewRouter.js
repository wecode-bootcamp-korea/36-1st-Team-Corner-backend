const express = require("express");
const reviewController = require("../controllers/reviewController");
const auth = require("../middlewares/auth");
const commonAuth = require("../utils/commonAuth");

const router = express.Router();

router.post("/:productId/review", auth.validationToken, reviewController.postReview);
router.patch("/:productId/review", auth.validationToken, reviewController.patchReview);
router.delete("/:productId/review", auth.validationToken, reviewController.deleteReview);
router.get("/:productId/reviews", reviewController.getReviewList);
router.get("/:productId/review/access",commonAuth.commonAuth);

module.exports = {
    router
}