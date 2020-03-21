const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{type:String,required:true},
    modelNo:{type:String,required:true},
    checisNo:{type:String},
    serialNo:{type:Number}
});
module.exports = mongoose.model('category',categorySchema);