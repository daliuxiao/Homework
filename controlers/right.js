const RightModel = require('../model/us');
const Right = {
    /**
     * 列表
     */
    index:(req, res, next)=>{
        //搜索关键字
        let key = req.query.key;
        let regex = new RegExp(key);

        //分页
        let count = 0;
        let limit = 2;
        let page = req.query.page;
        let totalPage = 0;
        let where = {};
        if(key){
            where = {title:{$regex:regex}};
        }
        RightModel.find(where).count().then(doc=>{
            count = doc;
            totalPage = Math.ceil(count/limit)
            //console.log(key);
            RightModel.find(where).skip((page-1)*limit).limit(2).sort({create_at:'desc'}).then(doc=>{
                res.json(doc);
            })
        });
    },
    get:(req, res, next)=>{
        //获取单页文章
    },
    /**
     * 展示发布文章页面
     */
    add:(req, res, next) =>{
        RightModel.find({is_sys:0}).then(doc=>{
            res.render('add', {category:doc});
        })
    },
    /**
     * 保存
     */
    save:(req, res, next)=>{
        console.log(req.file);
        let RightModel = new UserModel({
            title:req.body.title,
            content:req.body.content,
            author:req.body.author,
            is_jing:req.body.is_jing,
            status:req.body.status,
            img:req.file.filename,
            category_id:req.body.category_id,
            //user_id:req.body.category_id,
        });
        RightModel.save();
        res.redirect('/');
    },
    /**
     * 更新
     */
    update:(req, res, next)=>{
        let id = req.params.id;
        RightModel.update({_id:id},{
            title:req.body.title,
            content:req.body.content,
            author:req.body.author,
            is_jing:req.body.is_jing,
            status:req.body.status,
            img:''
        }).then(doc=>{
            res.json(doc);
        })
    },
    /**
     * 删除
     */
    del:(req, res, next)=>{
        let id = req.params.id;
        RightModel.remove({_id:id}).then(doc=>{
            res.json(doc);
        })
    }
}
module.exports = Right;