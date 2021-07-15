const { User } = require("../models");
const jwt = require("../util/jwt");
const moment = require("moment")
const path = require('path');

/* 用户登录 */
exports.login = async (req, res, next) => {
  try {
    const user = req.user;
      const userJson = user.toJSON();
      const token = jwt.sign({userId: userJson.id});
      const lastLogintime = userJson.thisLogintime;
      user.update({
        lastLogintime,
        thisLogintime: moment().format('YYYY-MM-DD, HH:mm:ss')
      })
      delete userJson.password;
      res.status(200).json({
        data: {
          user: userJson,
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
    console.log('re44444444444444q', req.body)
    const user = await User.update(req.body, {
      where: {
        id: req.body.id
      },
      attributes: { exclude: ['password'] }
    });
    res.json({ user });
  } catch (error) {
    next(error);
  }
};
