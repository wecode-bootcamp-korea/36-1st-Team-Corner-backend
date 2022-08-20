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
    const { productId } = req.params;
    const { contents } = req.body;
    const userId = req.userId;

    if (!contents) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await reviewService.patchReview(contents, productId, userId);
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
    const { productId } = req.params;
    const userId = req.userId;

    await reviewService.deleteReview(productId, userId);
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
    const { productId } = req.params;

    const reviewList = await reviewService.getReviewList(productId);
    return res.status(200).json({ data : reviewList});
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  postReview,
  patchReview,
  deleteReview,
  getReviewList,
};