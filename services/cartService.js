const cartDao = require("../models/cartDao");
const { validateQuantity, validateproductId } = require("../utils/validation");

const postCart = async (quantity, productId, userId) => {
  //validateproductId(productId);
  validateQuantity(quantity);

  const existProduct = await cartDao.existProduct(productId);
  const checkCart = await cartDao.existCart(productId, userId);

  if (!existProduct) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }

  if (checkCart === 0) {
    const postCart = await cartDao.postCart(quantity, productId, userId);

    return postCart;
  } else if (checkCart > 0) {
    const updateCart = await cartDao.updateCart(quantity, productId, userId);

    return updateCart;
  }

  if (quantity === 0) {
    const err = new Error("QUANTITY_CANNOT_BE_ZERO");
    err.statusCode = 400;
    throw err;
  }
};

const cartPostOnebyone = async (quantity, productId, userId) => {
  //validateproductId(productId);

  const existProduct = await cartDao.existProduct(productId);

  if (!existProduct) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }

  const cartOnebyone = await cartDao.cartOnebyone(quantity, productId, userId);

  return cartOnebyone;
}

const deleteAllCart = async (productId, userId) => {
  //validateproductId(productId);

  const existProduct = await cartDao.existProduct(productId);

  if (!existProduct) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }

  const deleteAllCart = await cartDao.deleteAllCart(productId, userId);

  return deleteAllCart;
};

module.exports = { postCart, deleteAllCart, cartPostOnebyone };
