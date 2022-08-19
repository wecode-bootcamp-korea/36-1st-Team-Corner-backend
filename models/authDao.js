const { appDataSource } = require("./dataSource");

const createUser = async (email, password, name) => {
  await appDataSource.query(
    `
    INSERT INTO users (
      email,
      password,
      name
    ) VALUES (?,?,?)
    `,
    [email, password, name]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    `
      SELECT *
      FROM users u
      WHERE u.email = ?
    `,
    [email]
  );

  return user;
};

module.exports = { createUser, getUserByEmail };