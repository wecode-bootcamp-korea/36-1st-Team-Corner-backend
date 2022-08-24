const { appDataSource } = require("./dataSource");

const existProduct = async (productId) => {
  const [product] = await appDataSource.query(
    `SELECT *
     FROM products
     WHERE id = ${productId}`
  );

  return product;
};

const checkStock = async (productId) => {
  const [stock] = await appDataSource.query(
    `SELECT
      stock
     FROM products
     WHERE id = ${productId}`
  );

  return parseInt(Object.values(stock));
};

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

const updateQuantity = async (quantity, productId, userId) => {
  try {
    await appDataSource.query(
      `UPDATE carts 
       SET quantity = ${quantity}
       WHERE product_id = ${productId} 
       AND user_id = ${userId}
       `
    )
  } catch (err) {
    const error = new Error("PRODUCT_DOES_NOT_EXIST");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  checkStock,
  existProduct,
  deleteAllCart,
  getAllCart,
  deleteOneCart,
  updateQuantity
};