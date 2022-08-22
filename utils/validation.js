const validateEmail = (email) => {
  const emValidation = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );
  if (!emValidation.test(email)) {
    const err = new Error("INVAILD_EMAIL");
    err.statusCode = 400;
    throw err;
  }
};

const validatePw = (password) => {
  const pwValidation = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/
  );

  if (!pwValidation.test(password)) {
    const err = new Error("INVAILD_PASSWORD");
    err.statusCode = 400;
    throw err;
  }
};

const validateproductId = (productId) => {
  const pdIdValidation = new RegExp(/^\d+$/);
  if (!pdIdValidation.test(productId)) {
    const err = new Error("INVALID_PRODUCT_ID");
    err.statusCode = 400;
    throw err;
  }
};

const validateQuantity = (quantity) => {
  const quantityValidation = new RegExp(/^\d+$/);
  
  if (!quantityValidation.test(quantity)) {
    const err = new Error("INVALID_QUANTITY");
    err.statusCode = 400;
    throw err;
  }
};

module.exports = { validateEmail, validatePw, validateQuantity, validateproductId };
