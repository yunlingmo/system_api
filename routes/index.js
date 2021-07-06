var express = require('express');
var router = express.Router();

/* 用户相关路由 */
router.use(require('./users'))

module.exports = router;
