const express = require('express');
const router = express.Router();
const user=require("../controlers/us");
//获取用户信息
router.get("/",user.index);
//登录
router.get("/login",user.login);
//提交登录
router.post('/login', user.doLogin);
//登出
router.get('/logout', user.logout);
//修改密码
router.get('/grzx', user.updatePassword);
// //提交密码
// router.post('/grzx', user.update);
module.exports = router;
