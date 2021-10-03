const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const encryptPassword = password => {
  return bcrypt.hash(password, 10);
};

const decryptPassword = (oldPassword, hash) => {
  return bcrypt.compare(oldPassword, hash);
};

const generateJWT = data => {
  return jwt.sign(data, process.env.APP_SECRET, { expiresIn: process.env.JWT_DURATION });
};

const verifyJWT = token => {
  return jwt.verify(token, process.env.APP_SECRET);
};

module.exports = { encryptPassword, decryptPassword, generateJWT, verifyJWT };
