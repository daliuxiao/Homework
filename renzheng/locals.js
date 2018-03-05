const CategoryModel = require("../model/cy");
const Locals=(req,res,next)=> {
    CategoryModel.find({is_nav: 1}).then(doc => {
        res.locals.categoryList = doc;
        res.locals.error = "";
        res.locals.error = req.flash('error');
        // if(req.session.error){
        //     res.locals.error=req.session.error;
        //     req.session.error="";
        // };
        res.locals.loginUser = req.session.loginUser;
        next();
    });
}
    module.exports = Locals;