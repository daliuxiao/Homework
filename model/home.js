const mongoose=require("mongoose");
const moment=require("moment");
const Schema=mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const HomeSchema=new Schema({
    title:{
        type:String,
        default:''
    },
    img:{
        type:String,
        default:''
    },
    content:{
        type:String,
        default:''
    },
    author:{
        type:String,
        default:""
    },
    is_jing:{
        type:Number,
        default:0
    },
    view:{
        type:Number,
        default:0
    },
    state:{
        type:Number,
        default:0
    },
    category_id:{
        type:ObjectId,

    },
    user_id:{
        type:ObjectId,
    },
    create_at:{
        type:Date,
        default:Date.now,
        get:(val)=>moment(val).format("YYYY-MM-DD")
    },
    update_at:{
        type:Date,
        default:Date.now,
        get:(val)=>{
            return  moment(val).format("YYYY-MM-DD")
        }
    },
    delete_at:{
        type:Date,
        default:null
    },
    name:{
        type:String,
        default:''
    },
    path:{
        type:String,
        default:''
    },
    template:{
        type:String,
        default:""
    },
    sort:{
        type:Number,
        default:0
    },
    is_sys:{
        type:Number,
        default:0
    },
    is_nav:{
        type:Number,
        default:0
    },
});
const Home = mongoose.model('Home', HomeSchema);
module.exports = Home;