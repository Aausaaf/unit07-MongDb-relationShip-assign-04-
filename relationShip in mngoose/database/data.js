const mongoose = require('mongoose')

async function connectdatabase() {
const dburi = "mongodb://localhost:27017/relations"

try{
    const response = await mongoose.connect(dburi);
    console.log("Database connection sucessfull")
}
catch (err) {
   console.log("error",err)
   throw err
}
}
module.exports= connectdatabase;