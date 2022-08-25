const { appDataSource } = require("./dataSource");

const deleteAllCart = async (userId) => {
    
      return await appDataSource.query(
        `DELETE FROM
          carts
         WHERE user_id = ${userId}`
      );
    }
  
const deleteOneCart = async (userId, productId) => {
    
      return await appDataSource.query(
        `DELETE FROM
          carts
         WHERE user_id = ${userId}
         and product_id = ${productId}`
      );
  };

module.exports = {deleteAllCart, deleteOneCart};