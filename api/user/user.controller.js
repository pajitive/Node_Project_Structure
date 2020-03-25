const user = require("./user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports = {
  signUp: async (req, res) => {
    try {
      const { name, email, password, phone } = req.body;
      let result = await user.findOne({ email: email });
      if (result) res.status(208).send({ message: "User already exist..." });
      else {
        let User = new user({
          name,
          email,
          password,
          phone
        });
        let resultData = await jwt.sign({ userData: User }, "secret", {
          expiresIn: 60 * 60
        });
        if (resultData) {
          let salt = await bcrypt.getSalt(10);
          User.password = await bcrypt.hash(password,salt);
          let newUser = await User.save();
          res.status(200).send({ result: true, token: resultData });
        }
      }
    } catch (e) {
      console.log(e);
      res.status(500).send({ result: false, message: "Something went wrong..." });
    }
  },

  login:async (req, res) => {
    try {
    let result = await user.findOne({email:req.body.email});
    if(result ==undefined || !result)
     res.status(208).send({result:false,message:'User is already registered!'});
     else{

     }
    } 
    catch (e) {
      console.log(e);
    }
  }
};
