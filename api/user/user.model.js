const mongoose = require('mongoose');

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
        min:0,
        max:10
    }
});

// var validateEmail = email=>{
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// }

user.pre('validate',(res,next)=>{
   if(res.email){
    console.log('pre Operation====>>>',res.email);
   }
   next();
})
module.exports = mongoose.model('user',User);