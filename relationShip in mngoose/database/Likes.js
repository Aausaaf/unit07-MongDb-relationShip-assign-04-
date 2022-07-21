const mongoose = require('mongoose')

const likesschema = new mongoose.Schema({
   User_id:String,
   Blog_id:String,
   Emoji:String,
})

const likes = mongoose.model('likes',likesschema)

module.exports = likes