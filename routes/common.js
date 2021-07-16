const express = require("express");
const router = express.Router();
const commonCtrl = require("../controller/common");
const multer  = require('multer')
const auth = require("../middleware/auth")
const upload = require("../util/multerUtil")

/* 文件上传 */
router.post("/upload",  upload('public/images/portrait').single('file'), commonCtrl.upload);

/* 图片访问 */
router.get("/uploads/*", commonCtrl.uploads);


module.exports = router;

