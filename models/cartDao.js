const { appDataSource } = require("./dataSource")

const getAllCart = async (userId) => {
      
      const carts = await appDataSource.query(
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
      if(!carts) {
        const error = new Error("CART_DOES_NOT_EXIST");
        error.statusCode = 400;
        throw error;}
      return carts
      }

module.exports = {getAllCart};
  