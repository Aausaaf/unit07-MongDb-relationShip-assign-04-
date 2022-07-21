const mongoose = require('mongoose')

const blogschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Body:{
        type:Number,
        required:true
    },
    Category_ids:[String],


})

const Blog = mongoose.model('Blog',blogschema)
module.exports= Blog;

