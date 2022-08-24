const express = require("express");
const reviewController = require("../controllers/reviewController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/product/:productId", auth.validationToken, reviewController.postReview);
router.patch("/product/:productId/my", auth.validationToken, reviewController.patchReview);
router.delete("/product/:productId/my", auth.validationToken, reviewController.deleteReview);
router.get("/product/:productId", reviewController.getReviewList);
router.get("/product/:productId/my", auth.validationToken, reviewController.getMyReviewList);

module.exports = {
    router
}