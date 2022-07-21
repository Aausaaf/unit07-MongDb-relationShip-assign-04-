const mongoose = require('mongoose')

const blogIdschema = new mongoose.Schema({
   blog_id:[
    String
   ]
})

const blog_id = mongoose.model('blog_id',blogIdschema)

module.exports = blog_id