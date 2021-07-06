/* 用户登录 */
exports.login = async(req, res, next) => {
    try {
        JSON.parse('ass')
      res.send('用户登录123');
    } catch (error) {
      next(error)
    }
}

/* 用户注册 */
exports.register = async(req, res, next) => {
    try {
      console.log(req.body)
      res.send('用户注册');
    } catch (error) {
      next(error)
    }
}

/* 获取当前用户信息 */
exports.getCurrentUser = async(req, res, next) => {
    try {
      res.send('获取当前用户信息');
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