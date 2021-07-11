const { User } = require("../models");
const mds = require("../util/md5");
const jwt = require("../util/jwt");

/* 用户登录 */
exports.login = async (req, res, next) => {
  try {
    const user = req.user;
      const token = jwt.sign({userId: user.id});
      delete user.password;
      res.status(200).json({
        data: {
          user,
          token
        },
      });
  } catch (error) {
    next(error);
  }
};

/* 用户注册 */
exports.register = async (req, res, next) => {
  try {
    let user = await User.create(req.body);
    const userJson = user.toJSON();
    delete userJson.password;
    res.status(201).json({ user: userJson});
  } catch (error) {
    next(error);
  }
};

/* 获取当前用户信息 */
exports.getCurrentUser = async (req, res, next) => {
  try {
    const id = req.userId;
    const user = await User.findByPk(id,{ attributes: { exclude: ['password'] } });
    res.json({ user });
  } catch (error) {
    next(error);
  }
};

/* 更新当前用户信息 */
exports.updateCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    user.update(req.body)
    const userJson = user.toJSON();
    delete userJson.password;
    res.json({ user: userJson });
  } catch (error) {
    next(error);
  }
};
