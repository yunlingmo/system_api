const { User } = require("../models");
const mds = require("../util/md5");

/* 用户登录 */
exports.login = async (req, res, next) => {
  try {
    // 数据验证
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username, password: mds(password) },
    });
    if (user === null) {
      res.status(400).json({
        message: "用户名密码不正确",
      });
    } else {
      res.status(200).json({
        user,
      });
    }
  } catch (error) {
    next(error);
  }
};

/* 用户注册 */
exports.register = async (req, res, next) => {
  try {
    console.log(req.body);
    let user = await User.create(req.body);
    user = JSON.stringify(user);
    user = JSON.parse(user);
    delete user.password;
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

/* 获取当前用户信息 */
exports.getCurrentUser = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json({ users });
  } catch (error) {
    next(error);
  }
};

/* 获取当前用户信息 */
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send("获取当前用户信息");
  } catch (error) {
    next(error);
  }
};
