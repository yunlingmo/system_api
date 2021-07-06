const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const errorHandler = require('./middleware/error-handler')
const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 路由挂载
app.use('/api', indexRouter);

// 捕获400错误异常
app.use(function(req, res, next) {
  next(createError(404));
});

// 挂载统一处理服务端错误中间件
app.use(errorHandler())


module.exports = app;
