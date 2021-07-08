const express = require("express");
const router = express.Router();
const uesrCtrl = require("../controller/users");
// const { check, validationResult } = require("express-validator");
// const { User } = require("../models");
const userValidate = require("../validator/user")
console.log('ddddd', userValidate.register)

/* 用户登录 */
router.post("/users/login", uesrCtrl.login);

/* 用户注册*/
// router.post(
//   "/users",
//   [
//     // 配置验证规则
//     check("username")
//       .notEmpty()
//       .withMessage("用户名不能为空")
//       .bail()
//       .custom(async (username) => {
//         const user = await User.findOne({ where: { username } });
//         if (user !== null) {
//           return Promise.reject("用户名已存在");
//         }
//       }),
//     check("password").notEmpty().withMessage("密码不能为空")
//   ],
//   (req, res, next) => {
//     // 判断验证结果
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         const  msgs = Array.from(errors.array(),({msg})=>msg);
//       return res.status(400).json({ message: msgs.join(',') });
//     }
//     next();
//   },
//   uesrCtrl.register
// );

/* 用户注册*/
router.post(
    "/users",
    userValidate.register,
    uesrCtrl.register
  );

/* 获取当前用户*/
router.get("/user", uesrCtrl.getCurrentUser);

/* 修改当前用户信息*/
router.put("/user", uesrCtrl.updateCurrentUser);

module.exports = router;
