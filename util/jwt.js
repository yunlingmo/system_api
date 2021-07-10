const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../config/bace_config");

// jwt签发
exports.sign = (payload) => {
  return jwt.sign(payload, jwtSecretKey);
};

// jwt验证
exports.verify = (token) => {
  try {
    return jwt.verify(token, jwtSecretKey);
  } catch (err) {
    return false;
  }
};
