const crypto = require("crypto");

module.exports = (str) => {
  return crypto
    .createHash("md5")
    .update("shagou" + str)
    .digest("hex");
}
