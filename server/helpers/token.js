require('dotenv').config();

const jwt = require('jsonwebtoken');

const sign = process.env.JWT_SECRET;

function generateToken(data) {
  return jwt.sign(data, sign, { expiresIn: '30d' });
}

function verifyToken(token) {
  return jwt.verify(token, sign);
}

module.exports = {
  generateToken,
  verifyToken,
};
