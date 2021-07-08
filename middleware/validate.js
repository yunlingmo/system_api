const { validationResult } = require("express-validator");

module.exports = (validations) => {
    console.log('6666666', validations.length)
  return async (req, res, next) => {
    await Promise.all(
      validations.map((validation) => {
        console.log('111111', validation)

        validation.run(req);
      })
    );
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
