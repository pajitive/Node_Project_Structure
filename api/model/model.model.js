const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
   name:{type:String},
   brand:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'brand'
   },
   category:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'category'
   }
});

module.exports = mongoose.model('model',modelSchema);