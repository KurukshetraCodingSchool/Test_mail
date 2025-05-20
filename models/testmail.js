const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/testmail').then(()=>{
    console.log("db connected");
})
const mailData = new mongoose.Schema({
    email:String
})
const testModel = mongoose.model('testmail',mailData);
module.exports = testModel