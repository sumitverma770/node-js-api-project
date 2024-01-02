const { Timestamp } = require('mongodb')
const mongoose= require('mongoose')

const categorySchema= new  mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        require:true
    }
},
{timestamps:true}
)


module.exports= mongoose.model('category',categorySchema)