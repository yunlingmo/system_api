const { User } = require("../models");
const path = require("path");
const nodeExcel = require("excel-export");
const url = require("url");
const multer = require("multer");
const upload = multer({ dest: "../public/images" });

/* 文件上传 */
exports.upload = async (req, res, next) => {
    try {
        const filePath = req.file.path.replace("public\\", "");
        res.status(200).json({
            data: {
                file: filePath,
            },
        });
    } catch (error) {
        next(error);
    }
};

/* 文件下载 */
exports.exportExcel = async (req, res, next) => {
    try {
        let conf = {};
        conf.cols = [
            {
                caption: "日期",
                type: "string",
            },
            {
                caption: "姓名",
                type: "string",
            },
            {
                caption: "省份",
                type: "string",
            },
            {
                caption: "市区",
                type: "string",
            },
            {
                caption: "地址",
                type: "string",
            },
            {
                caption: "邮编",
                type: "string",
            },
        ];
        conf.rows = [
            ["2016-05-03", "王小虎", "上海","普陀区", "上海市普陀区金沙江路 1518 弄","200333"],
            ["2016-05-03", "王小虎", "上海","普陀区", "上海市普陀区金沙江路 1518 弄","200333"],
            ["2016-05-03", "王小虎", "上海","普陀区", "上海市普陀区金沙江路 1518 弄","200333"],
            ["2016-05-03", "王小虎", "上海","普陀区", "上海市普陀区金沙江路 1518 弄","200333"],
            ["2016-05-03", "王小虎", "上海","普陀区", "上海市普陀区金沙江路 1518 弄","200333"],
            ["2016-05-03", "王小虎", "上海","普陀区", "上海市普陀区金沙江路 1518 弄","200333"],
            ["2016-05-03", "王小虎", "上海","普陀区", "上海市普陀区金沙江路 1518 弄","200333"],
        ];
        var result = nodeExcel.execute(conf); //将所有数据写入nodeExcel中
        res.setHeader("Conten-Tyep", "application/vnd.openxmmlformats:charset:s=utf-8"); //设置响应头
        var name = encodeURI('测试表');
        res.setHeader("Content-Disposition", "attachment; filename=" + name + ".xlsx");
        res.end(result, "binary"); //将文件内容传入
    } catch (error) {
        next(error);
    }
};
