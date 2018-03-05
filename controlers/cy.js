const CategoryModel=require("../model/cy")
const Category={
    index:(req,res,next)=>{
        //搜索关键字
        let key=req.query.key;
        let regex=new RegExp(key);
        //分页
        let count=0;
        let limit=2;
        let page=req.query.page;
        let totalPage=0;
        let where={};
        if(key){
            where={title:{$regex:regex}};
        }
        CategoryModel.find(where).then(doc=>{
            count=doc;
            totalPage=Math.ceil(count/limit);
            CategoryModel.find(where).skip((page-1)*limit).limit(2).sort({create_at:"desc"}).then(doc=>{
                res.json(doc);
            })
        });

    },
    get:(req,res,next)=>{
        //获取单页文章
    },
    save:(req,res,next)=>{
        let categoryModel=new CategoryModel({
            name:req.body.name,
            path:req.body.path,
            template:req.body.template,
            is_sys:req.body.is_sys,
            is_nav:req.body.is_nav,
            sort:req.body.sort,
            img:"",
            // category_id:req.body.category_id,
            // user_id:req.body.user_id,
        });
        categoryModel.save();
        res.json({
            "msg":"添加成功"
        });
    },
    update:(req,res,next)=>{
        let id=req.params.id;
        CategoryModel.update({_id:id},{
            name:req.body.name,
            path:req.body.path,
            template:req.body.template,
            is_sys:req.body.is_sys,
            is_nav:req.body.is_nav,
            sort:req.body.sort,
            img:"",
        }).then(doc=>{
            res.json(doc);
        })
    },
    del:(req,res,next)=>{
        let id=req.params.id;
        CategoryModel.remove({_id:id}).then(doc=>{
            res.json(doc);
        })
    }
}
module.exports=Category;

