const express = require('express');
const router = express.Router();
const home=require("../controlers/home")

/* GET home page. */
//首页
router.get("/",home.index);
//分类页
router.get("/",home.category);
//右边栏
// router.get("/",home.);
module.exports = router;
