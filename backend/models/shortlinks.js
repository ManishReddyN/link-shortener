const mongoose=require("mongoose")

const link=mongoose.Schema({
    link:{
        type:String,
        required:true
    },
    shortid:{
        type:String,
        required:true,
        unique:true
    },
    count:{
        type:Number,
        default:0,
    }
})

module.exports=mongoose.model('ShortLink',link)