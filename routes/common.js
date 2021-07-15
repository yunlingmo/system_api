const express = require("express");
const router = express.Router();
const commonCtrl = require("../controller/common");
const auth = require("../middleware/auth")

const multer  = require('multer')
const upload = multer({ dest: 'public/images/portrait' })

/* 文件上传 */
router.post("/upload",  upload.single('file'), commonCtrl.upload);

/* 图片访问 */
router.get("/uploads/*", commonCtrl.uploads);


module.exports = router;
