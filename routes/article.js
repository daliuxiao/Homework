var express = require('express');
var router = express.Router();
const article=require("../controlers/article");
const upload=require("../library/upload");
const auth=require("../renzheng/auth");
//获取文章
router.get("/",article.index);
//发布文章
router.post("/add",auth,upload.single('img'),article.save);
//添加文章页面
router.get("/add",auth,article.add);
//更新文章
router.post("/update/:id",article.update);
//删除文章
router.get("/delete/:id", article.del);
module.exports = router;
