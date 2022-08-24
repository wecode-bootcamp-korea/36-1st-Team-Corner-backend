const { appDataSource } = require("./dataSource");

const deleteAllCart = async (userId) => {
    try {
      return await appDataSource.query(
        `DELETE FROM
          carts
         WHERE user_id = ${userId}`
      );
    } catch (err) {
      const error = new Error("PRODUCT_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;
    }
  };

const deleteOneCart = async (userId, productId) => {
    try {
      
      return await appDataSource.query(
        `DELETE FROM
          carts
         WHERE user_id = ${userId}
         and product_id = ${productId}`
      );
    } catch (err) {
      const error = new Error("PRODUCT_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;
    }
  };

module.exports = {deleteAllCart, deleteOneCart};