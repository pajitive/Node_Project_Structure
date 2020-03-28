const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");

const User = mongoose.Schema({
    name: {
        type:String,
        minlength: 5,
        maxlength:100
    },
    email:{ 
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        required: 'Email address is required',
      //  validate: [validateEmail,'Please fill valid email...'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address'] 
    },
    password:{
        require:true,
        type:String
    },
    phone:{
        type:Number,
    },
    role:{
        type:String, 
        enum:['customer','admin','superadmin'],
        default:'customer'
    }, // For role base API
    createdAt:{ type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
});

User.methods.generateAuthToken = function(){
    let genToken =  jwt.sign({_id:this._id,role:this.role}, 'structure_private_key',{expiresIn:60*60});
    return genToken;
}
module.exports = mongoose.model('user',User);