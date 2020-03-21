const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:8,
        maxlength:200,
        // match:''
    },
    isForNew:{type:Boolean,default:false},
    isForused:{type:Boolean,default:false},
    description:{
        type:String,
        required: function() { return this.isForNew; }
    }
});

module.exports = mongoose.model('brand',brandSchema);