const { User } = require('../models')

/* 用户登录 */
exports.login = async(req, res, next) => {
    try {
      res.send('用户登录123');
    } catch (error) {
      next(error)
    }
}

/* 用户注册 */
exports.register = async(req, res, next) => {
    try {
      console.log(req.body)
      const user = await User.create(req.body)
      res.status(201).json({user});
    } catch (error) {
      next(error)
    }
}

/* 获取当前用户信息 */
exports.getCurrentUser = async(req, res, next) => {
    try {

      const users = await User.findAll();
      res.json({users})
    } catch (error) {
      next(error)
    }
}

/* 获取当前用户信息 */
exports.updateCurrentUser = async(req, res, next) => {
    try {
      res.send('获取当前用户信息');
    } catch (error) {
      next(error)
    }
}