const validater = require("../middleware/validate");
const { check, body } = require("express-validator");
const { User } = require("../models");
const md5 = require("../util/md5");

exports.register = validater([
  // 配置验证规则
  check("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .custom(async (username) => {
      const user = await User.findOne({ where: { username } });
      if (user !== null) {
        return Promise.reject("用户名已存在");
      }
    }),
  check("password").notEmpty().withMessage("密码不能为空"),
]);

exports.login = [
  validater([
    // 基础验证
    check("username").notEmpty().withMessage("用户名不能为空"),
    check("password").notEmpty().withMessage("密码不能为空"),
  ]),
  validater([
    // 用户名校验
    check("username").custom(async (username, { req }) => {
      const user = await User.findOne({ where: { username } });
      if (user === null) {
        return Promise.reject("用户名不存在");
      } else {
        req.user = user
      }
    }),
  ]),
  validater([
    // 密码校验
    check("password").custom(async (password, { req }) => {
      const user = req.user;
      if (user.password !== md5(password)) {
        return Promise.reject("密码不正确");
      }
    }),
  ])
];