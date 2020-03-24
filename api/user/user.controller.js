const user = require('./user.model');
var jwt = require('jsonwebtoken');

module.exports = {
    signUp: async (req,res)=>{
      try{
        const { name,email,password,phone } = req.body;
        let result = await user.findOne({email:email});
        if(result)
        res.status(208).send({message:'User already exist...'});
        else{
          let User = new user({
          name,email,password,phone
          });
          let resultData = await jwt.sign({userData:User},'secret',{expiresIn: 60 * 60});
          if(resultData){
            let newUser = await User.save();
            res.status(200).send({result:true,token:resultData});
          }
        }
      }
      catch(e){
          console.log(e);
          res.status(500).send({result:false,message:'Something went wrong...'});
      }
    },
}