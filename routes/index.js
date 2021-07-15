var express = require('express');
var router = express.Router();

/* 通用路由 */
router.use(require('./common'))

/* 用户相关路由 */
router.use(require('./users'))

module.exports = router;
