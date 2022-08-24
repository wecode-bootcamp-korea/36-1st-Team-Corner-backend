const { appDataSource } = require("./dataSource")

const getAllCart = async (userId) => {
    try {
      return await appDataSource.query(
        `SELECT
        c.quantity,
        c.product_id,
        p.id,
        p.name,
        p.price,
        p.thumbnail_image_url,
        p.category_id
      FROM carts c
      INNER JOIN products p ON p.id = c.product_id
      WHERE c.user_id = ${userId}
        `
      );
    } catch (err) {
      const error = new Error("PRODUCT_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;
    }
  };
module.exports = {getAllCart};
  