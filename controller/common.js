const { User } = require("../models");
const path = require('path');
const url = require('url');
const multer  = require('multer')
const upload = multer({ dest: '../public/images' })

/* 文件上传 */
exports.upload = async (req, res, next) => {
  try {
    const imgpath = path.resolve(__dirname, '..', req.file.path); 
    console.log('xxx', req.file)
    const fileInfo = Object.assign({imgpath}, req.file)
    res.status(200).json({
      data: {
        file: fileInfo,
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


