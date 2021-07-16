const { User } = require("../models");
const path = require('path');
const url = require('url');
const multer  = require('multer')
const upload = multer({ dest: '../public/images' })

/* 文件上传 */
exports.upload = async (req, res, next) => {
  try {
    console.log('xxx', req.file)
    res.status(200).json({
      data: {
        file: req.file.path,
      },
    });
  } catch (error) {
    next(error);
  }
};

/* 文件下载 */
exports.uploads = async (req, res, next) => {
  try {
    xx = path.resolve(__dirname, '..'); 
    res.sendFile( xx + req.url );
  } catch (error) {
    next(error);
  }
};


