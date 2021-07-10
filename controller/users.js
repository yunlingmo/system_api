const { User } = require("../models");
const mds = require("../util/md5");
const jwt = require("../util/jwt");

/* 用户登录 */
exports.login = async (req, res, next) => {
  try {
    // 数据验证
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
    console.log(req.body);
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
    console.log('wwwwww', req.query)
    const id = req.query.id;
    // const user = await User.findOne({ where: { username } });
    const users = await User.findByPk(id);
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
