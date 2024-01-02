const { Timestamp } = require('mongodb')
const mongoose =require('mongoose')

const BlogSchema= new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,

    title:{
        type:String,
        require:true,
        unique: true,
    },

    description:{
        type:String,
        require:true
    },
    
    author:{
        type:String,
        require:true
    },
    // photo:String


},
{timestamps:true},
)

module.exports=mongoose.model('blog', BlogSchema)
