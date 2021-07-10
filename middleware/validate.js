const { validationResult } = require("express-validator");

module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => {
      return validation.run(req)
    }));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const msgs = Array.from(errors.array(), ({ msg }) => msg);
    res.status(400).json({
      message: msgs.join(","),
    });
  };
};
