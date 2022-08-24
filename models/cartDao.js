const { appDataSource } = require("./dataSource")

const getAllCart = async (userId) => {
    try {
      return await appDataSource.query(
        `SELECT
        c.quantity,
        c.product_id,
        c.user_id,
        p.id,
        p.name,
        p.price,
        p.detail,
        p.thumbnail_image_url,
        p.stock,
        p.category_id
      FROM products p
      INNER JOIN carts c ON p.id = c.product_id
      WHERE c.user_id = ${userId}
        `
      );
    } catch (err) {
      const error = new Error("PRODUCT_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;
    }
  };
module.exports = {
     getAllCart};
  