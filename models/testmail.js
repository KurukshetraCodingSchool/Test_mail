const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/testmail').then(()=>{
    console.log("db connected");
})
const mailData = new mongoose.Schema({
    email:String,
    password:String,
    token:{
        type:Number,
        default:-1
    }
})
const testModel = mongoose.model('testmail',mailData);
module.exports = testModel