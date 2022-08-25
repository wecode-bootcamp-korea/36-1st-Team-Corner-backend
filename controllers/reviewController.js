const reviewService = require("../services/reviewService");

const postReview = async (req, res) => {
  try {
    const { contents } = req.body;
    const { productId } = req.params;
    const userId = req.userId;

    if (!contents) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await reviewService.postReview(contents, productId, userId);
    return res.status(201).json({
      message: "REVIEW_POSTED_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const patchReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { contents } = req.body;
    const userId = req.userId;

    if (!contents) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await reviewService.patchReview(reviewId ,contents, userId);
    return res.status(204).json({
      message: "REVIEW_EDITED_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const userId = req.userId;

    await reviewService.deleteReview(reviewId, userId);
    return res.status(200).json({
      message: "REVIEW_DELETE_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getReviewList = async (req, res) => {
  try {
    const paging = req.query;
    const page = parseInt(paging.page);
    const pageSize = parseInt(paging.pageSize);
    
    const { productId } = req.params;

    if (!page || !pageSize) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    const reviewList = await reviewService.getReviewList(page, pageSize, productId);

    return res.status(200).json({ reviewList : reviewList[0], reviewCount : reviewList[1]});
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getMyReviewList = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.userId;

    const myReviewList = await reviewService.getMyReviewList(productId, userId);
    return res.status(200).json({ reviewList : myReviewList});
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  } 
}

module.exports = {
  postReview,
  patchReview,
  deleteReview,
  getReviewList,
  getMyReviewList,
};