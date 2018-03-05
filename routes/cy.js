var express = require('express');
var router = express.Router();
const category=require("../controlers/cy");
//获取栏目
router.get("/",category.index);
//添加栏目
router.post("/add",category.save);
//更新栏目
router.post("/update/:id",category.update);
//删除栏目
router.get("/delete/:id", category.del);
module.exports = router;
