const app = require("hostman/src/web/app");
const { appDataSource } = require("./dataSource");

const existProduct = async (productId) => {
  const [product] = await appDataSource.query(
    `SELECT *
     FROM products
     WHERE id = ${productId}`
  );

  return product;
};

const existCart = async (productId, userId) => {
  const [existCartPd] = await appDataSource.query(
    `SELECT count(*)
     FROM carts
     WHERE product_id = ${productId}
     AND user_id = ${userId}`
  );

  return parseInt(Object.values(existCartPd)[0]);
};

const postCart = async (quantity, productId, userId) => {
  try {
    return await appDataSource.query(
      `INSERT INTO carts(
            quantity, 
            product_id, 
            user_id
         ) VALUES (?, ?, ?)`,

      [quantity, productId, userId]
    );
  } catch (err) {
    const error = new Error("PRODUCT_DOES_NOT_EXIST");
    error.statusCode = 400;
    throw error;
  }
};

const updateCart = async (quantity, productId, userId) => {
  try {
    return await appDataSource.query(
      `UPDATE carts 
       SET quantity = quantity + ${quantity}
       WHERE product_id = ${productId} 
       AND user_id = ${userId}`
    );
  } catch (err) {
    const error = new Error("PRODUCT_DOES_NOT_EXIST");
    error.statusCode = 400;
    throw error;
  }
};

const deleteAllCart = async (userId) => {
  try {
    return await appDataSource.query(
      `DELETE FROM
        carts
       WHERE user_id = ${userId}`
    );
  } catch (err) {
    const error = new Error("USER_DOES_NOT_EXIST");
    error.statusCode = 400;
    throw error;
  }
};
module.exports = {
  existProduct,
  postCart,
  existCart,
  updateCart,
  deleteAllCart,
};
