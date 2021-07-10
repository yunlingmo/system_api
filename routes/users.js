const express = require("express");
const router = express.Router();
const uesrCtrl = require("../controller/users");
const userValidate = require("../validator/user");

/* 用户登录 */
router.post("/users/login", userValidate.login, uesrCtrl.login);

/* 用户注册*/
router.post("/users", userValidate.register, uesrCtrl.register);

/* 获取当前用户*/
router.get("/user", uesrCtrl.getCurrentUser);

/* 修改当前用户信息*/
router.put("/user", uesrCtrl.updateCurrentUser);

module.exports = router;
