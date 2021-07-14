const { User } = require("../models");
const jwt = require("../util/jwt");
const moment = require("moment")
const path = require('path');
const formidable = require("formidable");

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
    // console.log('xxxxxxxxxxxx', req)
    // const user = await User.findByPk(req.userId);
    // user.update(req.body)
    // const userJson = user.toJSON();
    // delete userJson.password;
    // res.json({ user: userJson });
    const imgInfo = req
    console.log('xxxxxxxxxxxxxx', imgInfo)
    let form = new formidable.IncomingForm()
    form.encoding = 'utf-8' // 编码
    form.keepExtensions = true // 保留扩展名
    form.uploadDir = path.join(__dirname, './public/images/')
    form.parse(imgInfo, (err, fields, files) => {
      if (err) return next(err)
      console.log('fields') //Object 表单数据
      console.log('files') //上传文件用files.<name>访问
      res.json({
        code: 1,
        message: 'upload success'
      })
    })
  } catch (error) {
    next(error);
  }
};
