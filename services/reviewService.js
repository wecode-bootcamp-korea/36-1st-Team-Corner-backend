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

const patchReview = async (reviewId, contents, userId) => {

  if (contents.trim().length === 0) {
    const err = new Error("CONTENTS_CANNOT_BE_EMPTY");
    err.statusCode = 400;
    throw err;
  }

  const patchReview = await reviewDao.editedReview(reviewId, contents, userId);

  return patchReview;
};

const deleteReview = async (reviewId, userId) => {

  const deleteReview = await reviewDao.deleteReview(reviewId, userId);

  return deleteReview;
};

const getMyReviewList = async (productId, userId) => {
  validateproductId(productId);
  
  const getMyReviewList = await reviewDao.getMyReviewList(productId, userId);
  
  return getMyReviewList;
};

const getReviewList = async (page, pageSize, productId) => {
  validateproductId(productId);

  const reviewCount = await reviewDao.countReview(productId);

  if(reviewCount < pageSize) {
    pageSize = 5;
  }

  let start = 0;

  if(page <=0) {
    page = 1;
  } else {
    start = (page - 1) * pageSize;
  }
  const reviewList = await reviewDao.reviewList(start, pageSize, productId);

  return reviewList;
};

module.exports = {
  postReview,
  patchReview,
  deleteReview,
  getReviewList,
  getMyReviewList,
};