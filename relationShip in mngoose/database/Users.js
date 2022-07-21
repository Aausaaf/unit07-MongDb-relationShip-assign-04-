const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    social_profile:{
       linkedin : String,
facebook:String,
  Twiter:String,
  Github:String,
  instagram:String,

    },
    Addresses:{
        Line1: String,
        City: String,
        State: String,
        Pincode: String,
    }
})

const User = mongoose.model('User',userschema)
module.exports= User;

