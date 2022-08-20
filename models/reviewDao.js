const { appDataSource } = require("./dataSource");

const createReview = async (contents, productId, userId) => {
  try {
    return await appDataSource.query(
      `INSERT INTO reviews(
                contents, 
                product_id, 
                user_id
            ) VALUES (?, ?, ?)`,

      [contents, productId, userId]
    );
  } catch (err) {
    const error = new Error("THIS_PRODUCT_DOESN'T_EXIST");
    error.statusCode = 400;
    throw error;
  }
};

const editedReview = async (contents, productId, userId) => {
  try {
    return await appDataSource.query(
      `UPDATE 
            reviews 
        SET 
            contents = ? 
        WHERE product_id = ${productId} 
        AND user_id = ${userId}`,

      [contents]
    );
  } catch (err) {
    const error = new Error("REVIEW_EDIT_FAIL");
    error.statusCode = 400;
    throw error;
  }
};

const deleteReview = async (productId, userId) => {
  try {
    return await appDataSource.query(
      `DELETE
         FROM reviews
         WHERE product_id = ${productId}
         AND user_id = ${userId}`
    );
  } catch (err) {
    const error = new Error("REVIEW_DELETE_FAIL");
    error.statusCode = 400;
    throw error;
  }
};

const getReviewList = async (productId) => {
  try {
    return await appDataSource.query(
        `SELECT *
         FROM reviews
         WHERE product_id = ${productId}`, 
    );
  } catch (err) {
    const error = new Error("THIS_PRODUCT_DOESN'T_EXIST");
    error.statusCode = 404;
    throw error;
  }
};

module.exports = { createReview, editedReview, deleteReview, getReviewList };
