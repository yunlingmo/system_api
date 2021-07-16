
const multer  = require('multer')

module.exports = (path) => {
    const storage = multer.diskStorage({
        //设置上传后文件路径，uploads文件夹会自动创建。
       destination: path, 
       //给上传文件重命名，获取添加后缀名
        filename: function (req, file, cb) {
            var fileFormat = (file.originalname).split(".");
            cb(null, fileFormat[0] + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
        }
    });  
        //添加配置文件到muler对象。
        return multer({
             storage: storage
       });
  }
