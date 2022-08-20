const reviewDao = require("../models/reviewDao");
const { validateproductId } = require("../utils/validation");

const postReview = async (contents, productId, userId) => {
  validateproductId(productId);

  if (contents.trim().length === 0) {
    const err = new Error("CONTENTS_CANNOT_BE_EMPTY");
    err.statusCode = 400;
    throw err;
  }

  const postReview = await reviewDao.createReview(contents, productId, userId);

  return postReview;
};

const patchReview = async (contents, productId, userId) => {
  validateproductId(productId);

  if (contents.trim().length === 0) {
    const err = new Error("CONTENTS_CANNOT_BE_EMPTY");
    err.statusCode = 400;
    throw err;
  }

  const patchReview = await reviewDao.editedReview(contents, productId, userId);

  return patchReview;
};

const deleteReview = async (productId, userId) => {
  validateproductId(productId);

  const deleteReview = await reviewDao.deleteReview(productId, userId);

  return deleteReview;
};

const getReviewList = async (productId) => {
  validateproductId(productId);

  const getReviewList = await reviewDao.getReviewList(productId);

  return getReviewList;
}

module.exports = {
  postReview,
  patchReview,
  deleteReview,
  getReviewList
};