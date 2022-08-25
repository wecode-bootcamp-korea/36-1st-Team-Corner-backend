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

const countUserCart = async (userId) => {
  const [cartCounting] = await appDataSource.query(
    `SELECT 
        COUNT(*) 
       FROM carts
       WHERE user_id = ${userId}`
  );

  return parseInt(Object.values(cartCounting));
};

module.exports = {
  existProduct,
  postCart,
  existCart,
  updateCart,
  checkStock,
  countUserCart,
  getAllCart,
  deleteAllCart,
  deleteOneCart
};


