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

const editedReview = async (reviewId, contents, productId, userId) => {
  try {
    return await appDataSource.query(
      `UPDATE 
            reviews 
        SET 
            contents = ? 
        WHERE product_id = ${productId} 
        AND user_id = ${userId}
        AND id = ${reviewId}`,

      [contents]
    );
  } catch (err) {
    const error = new Error("REVIEW_EDIT_FAIL");
    error.statusCode = 400;
    throw error;
  }
};

const deleteReview = async (reviewId, productId, userId) => {

  try {
    return await appDataSource.query(
      `DELETE
         FROM reviews
         WHERE product_id = ${productId}
         AND user_id = ${userId}
         AND id = ${reviewId}`
    );
  } catch (err) {
    const error = new Error("REVIEW_DELETE_FAIL");
    error.statusCode = 400;
    throw error;
  }
};

const countReview = async (productId) => {
  try {
    const [reviewCounting] = await appDataSource.query(
      `SELECT count(*)
       FROM reviews
       WHERE product_id = ${productId}`
    );

    return reviewCounting;
  } catch (err) {
    const error = new Error("THIS_PRODUCT_DOESN'T_EXIST");
    error.statusCode = 404;
    throw error;
  }
};

const getReviewList = async (productId) => {
  try {
    return await appDataSource.query(
      `SELECT 
            r.id, 
            r.contents, 
            r.created_at, 
            u.name 
         FROM reviews r 
         LEFT JOIN users u 
         on r.user_id = u.id 
         WHERE r.product_id = ${productId}`
    );
  } catch (err) {
    const error = new Error("THIS_PRODUCT_DOESN'T_EXIST");
    error.statusCode = 404;
    throw error;
  }
};

const getMyReviewList = async (productId, userId) => {
  try {
    return await appDataSource.query(
      `SELECT 
          r.id, 
          r.contents, 
          r.created_at, 
          u.name 
       FROM reviews r 
       LEFT JOIN users u 
       on r.user_id = u.id 
       WHERE r.product_id = ${productId} 
       AND u.id = ${userId}`
    );
  } catch (err) {
    const error = new Error("THIS_PRODUCT_DOESN'T_EXIST");
    error.statusCode = 404;
    throw error;
  }
};

const reviewList = async (start, pageSize, productId) => {
      const queryRunner = appDataSource.createQueryRunner();
      await queryRunner.connect();

      await queryRunner.startTransaction()

      try {
        const reviewList = await queryRunner.query(
          `SELECT 
                r.id, 
                r.contents, 
                r.created_at, 
                u.name 
            FROM reviews r 
            LEFT JOIN users u 
            on r.user_id = u.id 
            WHERE r.product_id = ${productId}
            LIMIT ${start},${pageSize}`
       );
        const reviewCount = await queryRunner.query(
          `SELECT count(*) as reviewCount
          FROM reviews
          WHERE product_id = ${productId}`
        );

        await queryRunner.commitTransaction()
        return [reviewList, reviewCount];

      } catch (err) {
          await queryRunner.rollbackTransactrsion()
      } finally {
          await queryRunner.release()
      }
  };


module.exports = {
  createReview,
  editedReview,
  deleteReview,
  getReviewList,
  getMyReviewList,
  countReview,
  reviewList,
};
