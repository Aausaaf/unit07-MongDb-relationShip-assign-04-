const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema({
   blog_id:String,
   User_id:String,
   Message:String,
   rating:String,
})

const  Comment = mongoose.model('Comment',CommentsSchema)

module.exports = Comment