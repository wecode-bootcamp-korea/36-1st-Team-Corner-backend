const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/authDao");
const { validateEmail, validatePw } = require("../utils/validation");

const signUp = async (email, password, name) => {
    
    validateEmail(email)
    validatePw(password)

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("DUPLICATE_EMAIL!");
    err.statusCode = 409;
    throw err;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createUser(email, hashedPassword, name);
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error("SPECIFIED_USER_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error("INVAILD_PASSWORD");
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ sub: user.id, exp: Math.floor(Date.now()/1000) + (600*60) }, process.env.JWT_SECRET);
};

module.exports = { signUp, signIn };